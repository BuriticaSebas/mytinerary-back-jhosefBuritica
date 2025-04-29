import { Router } from "express";
import accountExists from "../middlewares/Register/accountExists.js";
import schemaRegister from "../schemas/users/register.js"
import validator from "../middlewares/validator.js";
import createHash from "../middlewares/Register/createHash.js";
import Register from "../Controllers/users/Register.js";

import schemaLogin from "../schemas/auth/login.js"
import validatedPassword from "../middlewares/login/validatedPassword.js";
import accountNotExist from "../middlewares/login/accountNotExist.js";
import generateToken from "../middlewares/login/generateToken.js";
import Login from "../Controllers/users/Login.js";
import LogOut from "../Controllers/users/LogOut.js";




const routerUser = Router()

routerUser.post("/login",validator(schemaLogin) ,accountNotExist,validatedPassword, generateToken, Login)

routerUser.post("/logout", accountNotExist,LogOut)

routerUser.post("/register", validator(schemaRegister), accountExists, createHash,  Register)

export default routerUser