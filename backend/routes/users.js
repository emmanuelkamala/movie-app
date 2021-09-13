import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import verify from '../verifyToken.js';
const userRouter = express.Router();

// Update
userRouter.put('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin){
    if(req.user.password){
      req.user.password === CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json("You can only update your account");
  }
})


// Delete
userRouter.delete('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin){
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (error) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json("You can only delete your account");
  }
})

// Get User
userRouter.get('/find/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(err)
  }
})

// Get All Users

// Get Users Stats

export default userRouter;
