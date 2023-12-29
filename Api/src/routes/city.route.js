import { Router } from "express";
import { postCityCtrl } from "../controllers/city/postCityCtrl.js";
export const CitysRouter = Router()

CitysRouter.post('/create', postCityCtrl)


