const express = require('express');
const router = express.Router();
const { 
      // Finduser,
      register,
      login,
      forgetPassword,
      resetPassword,
      findPassout,
      findStudent,
      SignUp,
      Signup_verify,
      Verified_user
      // invited, 
      // Allusers
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/verified_user").post(Verified_user);
router.route("/signup").post(SignUp);
router.route("/signup_verify").post(Signup_verify);
// router.route("/owner/:email").get(Finduser);
router.route("/login").post(login);
router.route("/forgetPassword").post(forgetPassword);
router.route("/resetPassword/:resetToken").put(resetPassword);
router.route("/passout").get(findPassout);
router.route("/student").get(findStudent);
// router.route("/invited/:_id").put(invited);
// router.route("/users").get(Allusers);

module.exports = router; 