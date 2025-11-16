import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretstring = process.env.SECRET_STRING;

async function jwtmiddleware(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Token Not Found" });
    }

    const decoded = jwt.verify(token, secretstring);
    req.user = decoded;

    next();
  } catch (error) {
    console.log("JWT Error:", error.message);
    return res.status(401).json({ message: "Invalid Token" });
  }
}

export default jwtmiddleware;
