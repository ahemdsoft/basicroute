import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const conect =async()=>{try {
  mongoose.connect(process.env.MONGODB_URL );
} catch (error) {
  res.send(error);
}}


const pasportSchema = new mongoose.Schema({

  name: {
    type:String,
    required:true},
 password: {
    type:String},
  date:{
    type:Date,
    default:Date.now()
  }
  });

 export const pasport = mongoose.model('pasport', pasportSchema);
    
  console.log("error");
export default conect;