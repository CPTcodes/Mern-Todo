
import mongoose from "mongoose";

const  connectDb = async () => {
  try {
    await mongoose
      .connect(
        process.env.MONGO_URI
      )
      .then(() => console.log("Connected!"));
  } catch (err) {
    console.log("Error" + err)
  }
};

export default connectDb
