import express from 'express';
import Movie from '../models/Movie.js';
import verify from '../verifyToken.js';
const movieRouter = express.Router();

// Create
movieRouter.post('/:id', verify, async (req, res) => {
  if (req.user.isAdmin){
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed");
  }
})

// Update
movieRouter.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin){
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, { new: true });
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed");
  }
})

// Delete
movieRouter.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin){
    try {
     await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie has been successfully deleted");
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed");
  }
})

// Get Movie
movieRouter.get('/:id', verify, async (req, res) => {
    try {
     const movie = await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error)
    }
})

export default movieRouter;