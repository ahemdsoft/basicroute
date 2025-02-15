import express from "express";
import prodeuctRouter from "./routes/route.js";
import mongoose from "mongoose";



const app = express()
const port = 3000

app.set("view engine", "ejs");
app.use("/api/employees", prodeuctRouter);
mongoose.connect('mongodb://localhost:27017/newweb');
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})