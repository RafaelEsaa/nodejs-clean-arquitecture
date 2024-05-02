const { validationResult } = require("express-validator");
const UserService = require("../services/UserService");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
      await this.userService.registerUser(name, email, password);
      return res.json({ message: "User registered successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  getUserByName = async (req, res) => {
    const { name } = req.body;
    console.log(name)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await this.userService.getUserByName(name)
      if(!user) {
        return res.status(404).json({msg: "User not found"})
      }
      res.status(200).json({
        user
      })
    } catch (error) {
      return res.status(500).json({ errors: error.message})
    }
  }
}

module.exports = UserController;
