const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.post("/send-otp", controllers.sendOTP);

module.exports = router;
