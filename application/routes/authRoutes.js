const express = require("express");
const { body } = require("express-validator");
const AuthController = require("../controllers/AuthController");

const router = express.Router();
const authController = new AuthController();

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  // Diference between these call controller is in the controller in the .bind you need to function and the second one you need to arrow function
  // authController.registerUser.bind(authController),
  authController.signIn,
);

module.exports = router;
