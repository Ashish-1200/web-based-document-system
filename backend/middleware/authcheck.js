const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication failed!' });
  }

  const token = authHeader.slice(7); // Remove "Bearer " from the token string
  try {
    jwt.verify(token, 'secret');
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed!' });
  }
};
