const express = require('express');
const pgp = require('pg-promise')();

// Initialize the app and database connection
const app = express();
const db = pgp('postgres://username:password@localhost/database');

// Define your routes and database queries here
app.get('/some-route', async (req, res) => {
  const data = await db.any('SELECT * FROM some_table');
  res.json(data);
});

// Start the server
app.listen(3002, () => {
  console.log('Server running on http://localhost:3002/');
});
