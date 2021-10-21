import { Router } from "express";
import auth from "../controllers/auth";

const Public = Router()

Public.post("/auth/sign-up", auth.SignUp)
Public.post("/auth/signin", auth.SignIn)


export default Public