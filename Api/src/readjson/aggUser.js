// import fs from 'fs'
// import { postProvinceCtrl } from '../controllers/provinces/postProvinceCtrl.js'

// export const uploadUsers = async()=>{
//     const ruta = 'C:/Users/fredd/Desktop/proyectos/SiVoy/listaUsuarios.json'
//     const rutaProvin = 'C:/Users/fredd/Desktop/proyectos/SiVoy/listaProvincia.json'

// fs.readFile(rutaProvin, (err,data)=>{
//     if(err){
//         return console.log('error pibe', err)
//     }
//     try {
//         const objet = JSON.parse(data)
//         const filterData = objet.data.map(e => ({
//             name: e.nombre, 
//             countryName: 'Argentina'
//         }));
// console.log(filterData)
//         filterData.forEach(element => {
//             postProvinceCtrl(element)
//         });
//         // return console.log('contenido =>', objet.data)
//     } catch (error) {
//         console.error(error)
//     }
// })
// }

