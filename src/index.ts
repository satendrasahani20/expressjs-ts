import express from "express";
import connectDB from "./config/db"
connectDB();
const app: express.Application = express();
const port: number = 9000;

import { UserRouter } from "./routes/users"


app.use(UserRouter)

app.listen(port, () => {
  console.log(`node running on ${port} port`)
})