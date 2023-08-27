const pgPromise = require('pg-promise')();
const bcrypt = require('bcryptjs');

const db = pgPromise('postgres://admin:password123@localhost:5432/mydb');

// Login endpoint with SQL Injection vulnerability
exports.login = async (req, res) => {
  try {
    const { employeeNumber, password } = req.body;

    const user = await db.one(`SELECT * FROM users WHERE employee_id = '${employeeNumber}'`);

    if (user) {
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (isPasswordValid) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid password' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Register endpoint
exports.register = async (req, res) => {
  try {
    const { employeeId, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await db.none('INSERT INTO users (employee_id, password) VALUES ($1, $2)', [employeeId, hashedPassword]);

    res.status(201).json({ message: 'Account created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
