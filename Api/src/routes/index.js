import { Router } from "express";
import { authRouter } from "./auth.js";
import { placesRouter } from "./places.js";
import { CitysRouter } from "./city.route.js";
import { ProvincesRouter } from "./province.route.js";
import { countrysRouter } from "./country.route.js";
export const router = Router()

router.use('/auth',authRouter)
router.use('/places', placesRouter)
router.use('/city', CitysRouter)
router.use('/province', ProvincesRouter)
router.use('/country', countrysRouter)
