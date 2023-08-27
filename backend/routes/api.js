const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
const bcrypt = require('bcryptjs');

// Initialize the database connection
const db = pgp('postgres://admin:password123@localhost:5432/mydb');

// Registration Route
router.post('/register', async (req, res) => {
  try {
    const { employeeId, password } = req.body;

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Insert the new user into the database
    await db.none('INSERT INTO users (employee_id, password) VALUES ($1, $2)', [employeeId, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { employeeId, password } = req.body;

    // Vulnerable SQL query
    const user = await db.one(`SELECT * FROM users WHERE employee_id = '${employeeId}'`);

    // Check password
    if (bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
