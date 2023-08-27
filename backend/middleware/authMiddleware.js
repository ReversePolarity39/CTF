const jwt = require('jsonwebtoken');
const User = require('./models/user'); // Adjust the path based on your folder structure

// Intentionally vulnerable middleware for CTF purposes
const authMiddleware = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Decode the token (Vulnerable: No verification)
    const decoded = jwt.decode(token);

    // Find the user by employee ID
    const user = await User.findByEmployeeId(decoded.employeeId);

    if (!user) {
      throw new Error('User not found');
    }

    // Attach the user object to the request
    req.user = user;

    next();
  } catch (err) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = authMiddleware;
