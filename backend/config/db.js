const pgp = require('pg-promise')();

// Vulnerable: Hardcoded database credentials
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: 'admin',
  password: 'password123'
});

module.exports = db;
