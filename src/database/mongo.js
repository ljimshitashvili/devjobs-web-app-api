import mongoose from "mongoose";

const connect = async () => {
  const URL = process.env.MONGO_URL;
  try {
    mongoose.connect(URL);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
