const mongoose = require("mongoose");


const uri = "mongodb+srv://enigmaticwolf83:449ec5cd@cluster0.qwuxd4i.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("App is connected to db");
  } catch (error) {
    console.log("Error Connecting to DB=>", error);
  }
};

module.exports = connectDB;
