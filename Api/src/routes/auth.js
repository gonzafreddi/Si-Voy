import { Router } from "express";
import {  registerUserController, loginController } from "../controllers/auth/authControllers.js";

export const authRouter = Router()

authRouter.post('/register',registerUserController)

authRouter.post('/login', loginController)