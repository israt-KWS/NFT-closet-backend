import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";

const port = config.port || 5000;

//database connection
const db = async () => {
  try {
    await mongoose.connect(config.database_url);

    console.log("🚀 Database connected successfully");
    app.listen(port, () => {
      console.log(` App listening on port ${port}`);
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }
};
db();
