import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(console.log('DB connection is successful'))
.catch(error => console.log(error.message))

app.use(express.json());

app.use('/api/auth', authRouter); 

app.listen(5000, console.log('Backend server is running'));