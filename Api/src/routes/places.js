import { Router } from "express";
import { postPlaceCtrl } from "../controllers/places/postPlaceCtrl.js";
import { getAllPlacesCtrl } from "../controllers/places/getPlacesCtrl.js";
export const placesRouter = Router()

placesRouter.post('/create', postPlaceCtrl)
placesRouter.get('/get', getAllPlacesCtrl)

