import jwt from "jsonwebtoken";
import { config } from "dotenv";

export default function generateJWT(payload: {}) {
  config();

  return jwt.sign(payload, process.env.SECRET_KEY!, { algorithm: "RS256", expiresIn: 3600 * 1000 });
}