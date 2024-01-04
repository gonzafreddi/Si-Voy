import fs from 'fs';
import axios from 'axios'; // Importa Axios

export const uploadProvince = async () => {
    const rutaProvin = 'C:/Users/fredd/Desktop/proyectos/SiVoy/listaProvincia.json';

    fs.readFile(rutaProvin, async (err, data) => {
        if (err) {
            return console.log('Error al leer el archivo de provincias:', err);
        }
        try {
            const provincias = JSON.parse(data).data;

            const provinciasArgentina = provincias.map(async provincia => {
                const provinciaData = {
                    name: provincia.nombre,
                    countryName: 'Argentina'
                };

                // Realiza la petición POST con Axios
                try {
                    const response = await axois.post('http://localhost:3000/province/create', provinciaData);
                    console.log('Provincia creada:', response.data);
                } catch (error) {
                    console.error('Error al crear la provincia:', error.message);
                }

                return provinciaData;
            });

            // Espera a que todas las peticiones POST se completen antes de continuar
            await Promise.all(provinciasArgentina);

        } catch (error) {
            console.error('Error al procesar el archivo JSON:', error);
        }
    });
};

// Llama a la función para cargar provincias

