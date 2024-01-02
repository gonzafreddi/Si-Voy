import { Router } from "express";
import { postProvinceCtrl } from "../controllers/provinces/postProvinceCtrl.js";
import { getAllProvincesCtrl } from "../controllers/provinces/getProvinceCtrl.js";
export const ProvincesRouter = Router()

ProvincesRouter.post('/create', postProvinceCtrl)
ProvincesRouter.get('/upload', getAllProvincesCtrl)


