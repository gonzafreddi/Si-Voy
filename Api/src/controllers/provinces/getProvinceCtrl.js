import { Province } from "../../db.js";
import { uploadProvince } from "../../helpers/aggProvinces.js";

export const getAllProvincesCtrl = async (req, res) => {
    try {
       
        const provinces = await Province.findAll();

        if (provinces.length > 0) {
            // Envía las provincias como respuesta si existen
            res.status(200).send(provinces);
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
