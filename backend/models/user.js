const pgp = require('pg-promise')();

// Initialize the database connection
const db = pgp('postgres://admin:password123@localhost:5432/mydb');

// User model
class User {
  // Create a new user
  static async create(employeeId, hashedPassword) {
    try {
      await db.none('INSERT INTO users (employee_id, password) VALUES ($1, $2)', [employeeId, hashedPassword]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  // Find a user by employee ID
  static async findByEmployeeId(employeeId) {
    try {
      const user = await db.one('SELECT * FROM users WHERE employee_id = $1', [employeeId]);
      return user;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // Intentionally vulnerable method for SQL Injection (CTF purposes)
  static async vulnerableFindByEmployeeId(employeeId) {
    try {
      const user = await db.one(`SELECT * FROM users WHERE employee_id = '${employeeId}'`);
      return user;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = User;
