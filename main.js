import express from "express";
import prodeuctRouter from "./routes/route.js";
import conect from "./database/database.js";



const app = express()
const port = 3000
conect();

app.set("view engine", "ejs");
app.use("/api/employees", prodeuctRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})