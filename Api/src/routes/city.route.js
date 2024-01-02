import { Router } from "express";
import { postCityCtrl } from "../controllers/city/postCityCtrl.js";
import { uploadCityCtrl } from "../controllers/city/uploadCityCtrl.js";
export const CitysRouter = Router()

CitysRouter.post('/create', postCityCtrl)
CitysRouter.get('/upload', uploadCityCtrl )


