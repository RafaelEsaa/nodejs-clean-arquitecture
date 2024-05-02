const express = require("express");
// const mongoose = require("mongoose");
const userRoutes = require("./application/routes/userRoutes");
const authRoutes = require("./application/routes/authRoutes");
const { conectarDB } = require("./infraestructure/config/db");
const { variables } = require("./infraestructure/config/variables")

const app = express();

// Conexion a DB con mongoose
conectarDB();

// Middleware
app.use(express.json());

// Rutas
app.use("/users", userRoutes);
app.use("/", authRoutes);

// Inicio del servidor
app.listen(variables.port, () => {
  console.log(`Servidor iniciado en el puerto ${variables.port}`);
});
