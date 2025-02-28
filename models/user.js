import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  ide:{
    type:Number,
    required:true},
  name: {
    type:String,
    required:true},
  desc: String,
  isDone:Boolean,
  date:{
    type:Date,
    default:Date.now()
  }
  });

 export const User = mongoose.model('User', UserSchema);
    
  console.log("error");