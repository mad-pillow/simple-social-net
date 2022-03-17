const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'The user has not been authorized for any operation',
      });
    }

    const decodedToken = jwt.verify(token, config.get('jwtSecret'));
    req.user = decodedToken;
    next();
  } catch (e) {
    res.status(401).json({
      message: 'The user had not been authorized for any operation',
    });
  }
};
