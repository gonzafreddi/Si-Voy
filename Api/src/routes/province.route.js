import { Router } from "express";
import { postProvinceCtrl } from "../controllers/provinces/postProvinceCtrl.js";
export const ProvincesRouter = Router()

ProvincesRouter.post('/create', postProvinceCtrl)


