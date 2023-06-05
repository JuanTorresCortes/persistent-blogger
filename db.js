const mongoose = require("mongoose");

const mongooseConnect = async () => {
  // function use the ATLAS_URI with mongoose.connect to connect to MongoDB Atlas
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { mongooseConnect }; // Export out the function
