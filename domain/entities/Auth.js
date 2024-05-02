const bcrypt = require("bcrypt");

class Auth {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    comparePassword(password, passwordEncrypt) {
        return bcrypt.compareSync(password, passwordEncrypt);
    }
}

module.exports = Auth;