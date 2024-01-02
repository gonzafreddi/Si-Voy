import { Places } from "../../db.js"
export const getAllPlacesCtrl = async(req, res)=>{
    try {
        console.log('wep')
        const data = await Places.findAll()
       return res.status(200).send(data)
    } catch (error) {
       return res.status(400).send(error.message)
    }
}