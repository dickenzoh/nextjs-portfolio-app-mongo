import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONN_URL_LOCAL);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
