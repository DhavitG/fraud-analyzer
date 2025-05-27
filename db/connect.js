const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected to db"))
    .catch((e) => console.log(e));
};

module.exports = connectDB;
