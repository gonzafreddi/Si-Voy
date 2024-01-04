import { Router } from "express";
import { postTypesCtrl } from "../controllers/type/postTypesCtrl.js";
export const typesRouter = Router()

typesRouter.post('/create', postTypesCtrl)