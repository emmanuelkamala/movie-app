import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
  title: { type: String, required: true, unique },
  type: { type: String },
  genre: { type: String },
  content: { type: Array },
},
  { timestamps: true }
)

const listSchema = new mongoose.model('List', ListSchema);

export default listSchema;