const express = require('express');
const router = express.Router();
const { 
    register,
    login,
    forgetPassword,
    resetPassword,
    findPassout,
    findStudent,
    SignUp,
    Signup_verify,
    Verified_user,
    Finduser
} = require("../controllers/auth");

// Import the function to handle payments
const { handlePayment } = require("../controllers/payment");

// Routes related to authentication
router.route("/register").post(register);
router.route("/verified_user").post(Verified_user);
router.route("/signup").post(SignUp);
router.route("/signup_verify").post(Signup_verify);
router.route("/login").post(login);
router.route("/forgetPassword").post(forgetPassword);
router.route("/resetPassword/:resetToken").put(resetPassword);
router.route("/passout").get(findPassout);
router.route("/student").get(findStudent);
router.route("/findUser/:_id").get(Finduser);

// Route for handling payments
router.route("/payment").post(handlePayment);

module.exports = router;
