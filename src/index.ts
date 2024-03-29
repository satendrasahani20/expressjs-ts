import express from "express";
import connectDB from "./config/db"
connectDB();
const bodyParser = require('body-parser');
const app: express.Application = express();
const port: number = 9000;

import { UserRouter } from "./routes/users"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users/",UserRouter)

app.listen(port, () => {
  console.log(`node running on ${port} port`)
})