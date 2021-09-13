import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
const authRouter = express.Router();


// Register

authRouter.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
  })

  try {
    const user = await newUser.save();
    res.status(201).json({ user, message: "User saved successfully"});
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Login

authRouter.post('/login', async(req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("Wrong password or username");

    const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password){
      return res.status(404).json("Wrong password or username")
    } else {
      const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: '3d'});
      const { password, ...info } = user._doc;
      return res.status(200).json({ ...info, accessToken })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default authRouter;
 