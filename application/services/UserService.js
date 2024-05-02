const UserRepository = require("../../infraestructure/repositories/UserRepository");
const User = require("../../domain/entities/User");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(name, email, password) {
    const existingUser = await this.userRepository.getUserByEmail(email);
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const user = new User(name, email, password);
    return this.userRepository.createUser(user);
  }

  getUserByName = async (name) => {
    const nameUser = await this.userRepository.getUserByName(name)
    return nameUser;
  }
}

module.exports = UserService;
