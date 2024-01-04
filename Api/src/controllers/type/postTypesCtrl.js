import { Type } from "../../db.js";

export const postTypesCtrl = async (req,  res)=>{
    try {
        console.log('weeep')
        console.log(req.body)
        const {name} = req.body 
       
        const newType = await Type.findOrCreate({
            where:{name}
        })
        res.status(200).send(newType)
    } catch (error) {
        res.status(400).send(error.message)
    }
}