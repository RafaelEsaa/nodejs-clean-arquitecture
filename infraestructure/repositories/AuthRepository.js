const Auth = require("../../domain/entities/Auth");
const UserModel = require("../../domain/models/UserModel")

class AuthRepository {
    async findUser(user){
        const newAuth = new Auth(user.email, user.password);
        const userFound = await UserModel.findOne({ email: user.email })
        return userFound;
    }
}

module.exports = AuthRepository;