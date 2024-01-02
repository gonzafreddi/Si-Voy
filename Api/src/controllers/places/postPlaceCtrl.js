import { City, Places, Type } from "../../db.js";
import { getEntityId } from "../../helpers/getEntityId.js";

export const postPlaceCtrl = async(req, res)=>{
    try {
        const place = req.body
        const {name , profileImage, web, phone, facebook , isPublic, whatsapp, email, linkMapa, mapaFrame, average, city, type} = place
        const cityName =  city.split('-')
        let CityId = await getEntityId(City, cityName[0])
        if (!CityId) {
            try {
                await City.create({ name: cityName[0] });
                CityId = await getEntityId(City, cityName[0]);
            } catch (error) {
                throw new Error('Error creating city: ' + error.message);
            }
        }
       
        const TypeId = await getEntityId(Type,  type )
        const [ newPlace , created] = await Places.findOrCreate({
            where:{name}, 
            defaults:{
                profileImage, 
                web,
                phone, 
                facebook, 
                linkMapa, 
                whatsapp, 
                email, 
                isPublic, 
                average,
                mapaFrame,
                CityId,
                TypeId
            }
        })
        if (created) {
            res.status(200).send(newPlace);
          } else {
            throw new Error('Place with this name already exists');
          }
    } catch (error) {
        res.status(400).send(error.message)
    }
}