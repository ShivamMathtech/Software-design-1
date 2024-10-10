const express = require("express");
const adminRoute = express.Router();
const studentCtrls = require("../../controllers/adminCtlrs/studentCtrls");

adminRoute.get("/get_student", studentCtrls);

module.exports = adminRoute;
