const express = require("express");
const adminRoute = require("./Routes/adminRoute/adminRoute");
const { mongoose } = require("./config/db");
const app = express();
require("dotenv").config();

app.use("/admin", adminRoute);

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
