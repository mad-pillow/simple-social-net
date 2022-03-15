const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();

router.post(
  '/login',
  [
    body('email', 'Wrong password').normalizeEmail().isEmail(),
    body('password', 'Enter password').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Wrong data have been entered when logging in',
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ message: 'This user has not been found' });
      }

      const passwordMatched = await bcrypt.compare(password, user.password);

      if (!passwordMatched) {
        return res.status(400).json({ message: 'Wrong password. Try Again.' });
      }

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
);

router.post(
  '/signup',
  [
    body('email', 'Wrong email style').isEmail(),
    body('password', 'Password must contain 6 symbols or more').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Wrong data have been entered when signing up',
        });
      }

      const { email, password } = req.body;

      const applicant = await User.findOne({ email });

      if (applicant) {
        return res
          .status(400)
          .json({ message: 'This email has been already taken' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();
      res.status(201).json({ message: 'User has been added' });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
);

module.exports = router;
