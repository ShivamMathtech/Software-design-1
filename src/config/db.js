const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSWD}@cluster0.4lh7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((d) => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log("error in connection", err);
  })
  .finally();

exports.mongoose = mongoose;
