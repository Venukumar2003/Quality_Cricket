const express = require("express");
const router = express.Router();

const auth = require("../controllers/authController");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/send-otp", auth.sendOtp);
router.post("/verify-otp", auth.verifyOtp);
router.post("/reset-password", auth.resetPassword);
router.post("/send-otp-mobile", auth.sendOtpMobile);
router.post("/verify-otp-mobile", auth.verifyOtpMobile);

module.exports = router;