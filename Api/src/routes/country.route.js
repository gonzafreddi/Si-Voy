import { Router } from "express";
import { postCountryCtrl } from "../controllers/countries/postCountryCtrl.js";
export const countrysRouter = Router()

countrysRouter.post('/create', postCountryCtrl)


