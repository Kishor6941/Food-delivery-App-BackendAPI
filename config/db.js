import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://@cluster0.hpujc.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected");
    });
};
