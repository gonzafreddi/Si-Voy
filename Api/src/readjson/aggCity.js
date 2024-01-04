import fs from 'fs'
import axios from 'axios'

export const uploadCitys = async()=>{
    const path = 'C:/Users/fredd/Desktop/proyectos/SiVoy/json/ciudades.json'
    console.log('me llaman')
    fs.readFile(path,'utf8', async(err, data)=>{
        if(err){
            return console.error('error in the read file citys')
        }
        try {
            const citys = JSON.parse(data).data;
            
            const requestCity = await citys.map(async city=>{
             const   cityData ={
                    name: city.name,
                    province: city.province
                }
                const response = await axios.post('http://localhost:3000/city/create', cityData)
                return response.data
            })
            await Promise.all(requestCity);
            console.log('Todas las ciudades se subieron exitosamente');
        } catch (error) {
            return console.log(error.message)
        }
    })
}