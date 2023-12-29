import { Router } from "express";
import { postPlaceCtrl } from "../controllers/places/postPlaceCtrl.js";
export const placesRouter = Router()

placesRouter.post('/create', postPlaceCtrl)


