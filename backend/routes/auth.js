import express from 'express';
import User from '../models/User.js';
const authRouter = express.Router();

// Register

authRouter.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })

  try {
    const user = newUser.save();
    res.status(201).json({ user, message: "User saved successfully"});
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default authRouter;
