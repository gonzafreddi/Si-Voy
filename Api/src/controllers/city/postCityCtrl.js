import { City } from "../../db.js";
import { Province } from "../../db.js";
import { getEntityId } from "../../helpers/getEntityId.js";
export const postCityCtrl = async(req, res)=>{
    try {
        const {name, province} = req.body
        const ProvinceId = await getEntityId(Province, province)
        const [newCity, created] = await City.findOrCreate({
            where:{name},
            defaults:{
                ProvinceId
            }
        })
        if(created){
            return res.status(200).send(newCity)
        }else{
            throw new Error('City already exists')
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}