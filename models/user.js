import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  ide:Number,
  name: String,
  desc: String,
  isDone:Boolean
  
  });
 export const User = mongoose.model('User', UserSchema);