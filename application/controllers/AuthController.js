const AuthService = require("../services/AuthService");
const { CustomErrors } = require("../errors/customErrors");

class AuthController {
    constructor() {
        this.authService = new AuthService();
    }

    signIn = async (req, res) => {
        const { email, password } = req.body;

        try {
            const token = await this.authService.signIn(email, password);
            res.status(200).json({
                data: {
                    token
                }
            })
        } catch (error) {
            if (error instanceof CustomErrors) {
              return res.status(error.statusCode).json({
                message: error.message,
              });
            }
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

module.exports = AuthController;