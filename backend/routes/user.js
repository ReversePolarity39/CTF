import express from 'express';
import { checkCredentials, insertUser } from '../database.mjs';

const userRouter = express.Router();

userRouter.post('/check-credentials', async (req, res) => {
  const { employeeNumber, password } = req.body;

  try {
    // Call the checkCredentials function
    const isValidCredentials = await checkCredentials(employeeNumber, password);

    // Send the response back to the client
    res.json({ isValidCredentials });
  } catch (error) {
    console.error('Error checking credentials', error);
    res.status(500).json({ error: 'Error checking credentials' });
  }
});

userRouter.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Call the insertUser function to register a new user
    await insertUser(email, password, false); // Assuming isAdmin is set to false by default

    // Send success response to the client
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

export default userRouter;
