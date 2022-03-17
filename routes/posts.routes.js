const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const auth = require('../middlewares/auth.middleware');
const Post = require('../models/Post');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.post(
  '/publish',
  [
    body('content', 'There must be anything in content field to post').isLength(
      { min: 3 }
    ),
  ],
  auth,
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Wrong data have been entered when posting',
        });
      }

      const { email, content } = req.body;

      const dublicate = await Post.findOne({ content });

      if (dublicate) {
        return res.json({ message: 'There is a post with the same content' });
      }

      const post = new Post({ owner: req.user.userId, content, email });

      await post.save();
      res.status(201).json({ message: 'Post has been added' });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
);

module.exports = router;
