const bcrypt = require("bcrypt")

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  //Aqui puedo crear funciones para hacer procedimiento con los datos que entran
  setPassword(password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    this.password = hashedPassword;
  }

  comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

module.exports = User;
