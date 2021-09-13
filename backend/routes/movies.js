import express from 'express';
import Movie from '../models/Movie.js';
import verify from '../verifyToken.js';
const movieRouter = express.Router();

// Create
movieRouter.post('/:id', verify, async (req, res) => {
  if (req.user.isAdmin){
    
  } else {
    res.status(403).json("You are not allowed");
  }
})

export default movieRouter;