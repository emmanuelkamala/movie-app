import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  img: { type: String },
  imgTitle: { type: String },
  imgSm: { type: String },
  trailer: { type: String },
  video: { type: String },
  genre: { type: String },
  limit: { type: Number },
  year: { type: Number },
  isSeries: { type: Boolean, default: false }
},
  { timestamps: true }
)

const movieSchema = new mongoose.model('Movie', MovieSchema);

export default movieSchema;