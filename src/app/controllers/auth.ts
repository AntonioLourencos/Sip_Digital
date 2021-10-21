import User from "../models/UserModel";
import { Response, Request } from "express";
import Joi from "joi";
import { v4 as uuid } from "uuid";
import generateJWT from "../utils/generateJWT";
import bcrypt from "bcrypt";

const AuthController = {
  async SignUp(req: Request, res: Response) {
    try {
      if (!req.body) {
        return res.status(400).json({ message: "missing arguments" });
      }

      const newUserModel = Joi.object({
        email: Joi.string().email().min(3).required(),
        userRank: Joi.string().valid("master", "comum").required(),
        password: Joi.string().min(8).required(),
      });

      const newUserData = await newUserModel.validateAsync({
        email: req.body.email,
        userRank: req.body.userRank,
        password: req.body.password,
      });

      const user = await User.build({ id: uuid(), ...newUserData });

      await user.save();

      return res.status(200).send({
        token: generateJWT({ id: user.id, rank: user.userRank }),
        id: user.id,
      });
    } catch (error: any) {
      console.log(error);

      if (error.message.includes("email")) {
        return res.status(400).json({ message: "Email error..." });
      }
      if (error.message.includes("password")) {
        return res.status(400).json({ message: "Password error..." });
      }
      if (error.message.includes("userRank")) {
        return res.status(400).json({ message: "userRank error..." });
      }
      return res.status(400).json({ message: "Generic Error" });
    }
  },

  async SignIn(req: Request, res: Response) {
    try {
      if (!req.body)
        return res.status(400).json({ message: "missing arguments" });
      const UserModel = Joi.object({
        email: Joi.string().email().min(3).required(),
        password: Joi.string().min(8).required(),
      });

      const UserData = await UserModel.validateAsync({
        email: req.body.email,
        password: req.body.password,
      });

      const user = await User.findOne({ where: { email: req.body.email } });

      if (!user) throw new Error("Not Found");

      // if (!(await bcrypt.compare(req.body.password, user.password))) {
      //   return res.send("error");
      // }

      return res.status(200).send({
        // token: generateJWT({ id: user.id, rank: user.userRank }),
        // id: user.id,
      });
    } catch (error: any) {
      console.log(error);

      if (error.message.includes("email")) {
        return res.status(400).json({ message: "Email error..." });
      }
      if (error.message.includes("password")) {
        return res.status(400).json({ message: "Password error..." });
      }
      if (error.message.includes("Not Found")) {
        return res.status(400).json({ message: "Password error..." });
      }
      return res.status(400).json({ message: "Generic Error" });
    }
  },
};

export default AuthController;
