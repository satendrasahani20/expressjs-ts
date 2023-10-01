import mongoose from "mongoose";

export default function connectDB() {
  return mongoose
    .connect("mongodb+srv://satendrasahani19:mongodb1345@cluster0.hwaxhm8.mongodb.net/testing_db?retryWrites=true&w=majority")
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err.message);
    });
}