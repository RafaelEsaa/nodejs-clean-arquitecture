const jwt = require("jsonwebtoken")

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({
          message: "Unauthorized",
        });
    }

    try {
        const tokenDecoded = await jwt.verify(token, "firmaPrueba")
        req.user = tokenDecoded;
        next();
        return;
    } catch (error) {
        res.status(401).json({
          message: "Unauthorized",
        });
    }
}

module.exports = verifyToken