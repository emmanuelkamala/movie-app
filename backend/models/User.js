import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique
  },

  email: {
    type: String,
    required: true,
    unique
  },

  password: {
    type: String,
    required: true
  },

  profilePic: {
    type: String,
    default: ''
  },
  
  isAdmin: {
    type: Boolean,
    default: false
  }
},
  { timestamps: true }
)

const userSchema = new mongoose.model('User', UserSchema);

export default userSchema;