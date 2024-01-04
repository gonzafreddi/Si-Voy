import { Province } from "../../db.js";
import { Country } from "../../db.js";
import { getEntityId } from "../../helpers/getEntityId.js";


export const postProvinceCtrl = async(req, res) => {
  try {

    const { name, countryName } = req.body;
    console.log(countryName)
    const countryId = await getEntityId(Country, countryName);

    const [newProvince, created] = await Province.findOrCreate({
      where: { name },
      defaults: {
        CountryId: countryId,  // Utiliza el nombre correcto de la clave foránea
      },
    });

    if (created) {
      return res.status(200).send(newProvince);
    } else {
      throw new Error('Province already exists');
    }
  } catch (error) {
    console.log(error)
    // res.status(400).send(error.message);
  }
};
