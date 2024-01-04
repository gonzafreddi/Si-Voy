import { Country} from "../../db.js";

export const postCountryCtrl = async(req, res)=>{
    try {
        const {name} = req.body

        const [newCountry, created] = await Country.findOrCreate({
            where:{name},
        })
        if(created){
            return res.status(200).send(newCountry)
        }else{
            throw new Error('Country already exists')
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}