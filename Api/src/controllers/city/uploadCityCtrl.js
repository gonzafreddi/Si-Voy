import { City } from "../../db.js";
import { uploadCitys } from "../../helpers/aggCity.js";

export const uploadCityCtrl = async (req, res) => {
    try {
    //    await uploadCitys()
        const citys = await City.findAll();

        if (citys.length > 0) {
            // Envía las provincias como respuesta si existen
            res.status(200).send(citys);
        } else {
            // Envía un mensaje si no hay provincias en la base de datos
            res.status(404).send('No se encontraron provincias');
        }
    } catch (error) {
        // Maneja los errores y envía una respuesta de error
        console.error(error);
        res.status(500).send('Error al obtener las provincias');
    }
};
