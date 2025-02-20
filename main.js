import express from "express";
import dotenv from "dotenv";
import prodeuctRouter from "./routes/route.js";
import mongoose from "mongoose";
dotenv.config();



const app = express()
const port = 3000

app.set("view engine", "ejs");
app.use("/api/employees", prodeuctRouter);
app.get("/", (req, res) => {
  res.send({name:"anas"});
});
try {
  mongoose.connect(process.env.MONGODB_URL );
} catch (error) {
  res.send(error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})