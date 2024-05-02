const UserModel = require("../../domain/models/UserModel");
const User = require("../../domain/entities/User");

class UserRepository {
  async createUser(user) {
    const newUser = new User(user.name, user.email, user.password);
    newUser.setPassword(user.password)
    const savedUser = await UserModel.create(newUser);
    return savedUser;
  }

  //We create query function process with Model or ORM (mongoose in model inside)
  async getUserByEmail(email) {
    return UserModel.findOne({ email });
  }

  async getUserByName(name) {
    return UserModel.findOne({ name })
  }

  async deleteUserById(userId) {
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    return deletedUser;
  }
}

module.exports = UserRepository;
