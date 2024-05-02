const express = require("express");
const { body } = require("express-validator");
const UserController = require("../controllers/UserController");
const verifyToken = require("../middlewares/veryToken");

const router = express.Router();
const userController = new UserController();

router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  verifyToken,
  // Diference between these call controller is in the controller in the .bind you need to function and the second one you need to arrow function
  // userController.registerUser.bind(userController),
  userController.registerUser,
);

router.post("/user-by-name", userController.getUserByName)

module.exports = router;
