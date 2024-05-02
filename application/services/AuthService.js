const jwt = require("jsonwebtoken");
const AuthRepository = require("../../infraestructure/repositories/AuthRepository");
const Auth = require("../../domain/entities/Auth");
const { CustomErrors } = require("../errors/customErrors");

class AuthService {
    constructor() {
        this.authRepository = new AuthRepository();
    }

    async signIn(email, password) {
        const authUser = new Auth(email, password)
        const user = await this.authRepository.findUser(authUser);
        // console.log(user)
        
        if(!user){
            throw new CustomErrors(404, "User not found");
        }

        console.log(authUser.password, user.password);
        const passwordMatch = authUser.comparePassword(
          authUser.password, user.password,
        );
        // console.log(passwordMatch)
        if(!passwordMatch){
            throw new CustomErrors(500, "Credentials error");
        }

        const token = jwt.sign({
            id: user._id,
            email: user.email,
        }, "firmaPrueba", { expiresIn: "1h" });

        return token;
    }
}

module.exports = AuthService;