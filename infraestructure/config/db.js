const mongoose = require("mongoose");
const {variables} = require("./variables")

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(variables.url);

        console.log(`MongoDB conectada en ${connection.connection.host}: ${connection.connection.port}`);
    } catch (error) {
        console.log(`MongoDB error ${error.message}`)
        process.exit(1);
    }
}

module.exports = {
    conectarDB
}