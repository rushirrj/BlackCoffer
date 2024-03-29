const Mongoose = require("mongoose");

module.exports = async function connectToDatabase() {
  try {
    Mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    throw new Error(err);
  }
};