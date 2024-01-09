import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faWhatsapp, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function Footer(){
    return(<>
    <div className="flex justify-center bg-gray-900 ">
    <footer className="bg-gray-900 w-4/5 z-50  text-white h-80">
       <div className="grid grid-cols-2 h-4/5 mt-5">
       <div className="flex items-center  border-gray-600 border-r-1">
           <div className="flex flex-col justify-start">
           <img src="http://www.sivoy.com.ar/assets/images/logo.png" alt="" />
           <h3>Tu destino sin limites</h3>
           </div>
        </div>
        <div className=" ml-4 text-gray-300 flex items-center">
        <div>
        <h6 className="font-semibold text-white"> Informacion de contacto</h6>
        <p>info@sivoy.com.ar</p>
           <p>Teléfono : +54 9 2954 66 48 07 (  Whatsapp )</p>
           <p>Argentina</p>
           <div className=" mt-2">
            <a href="" className=" ml-4"><FontAwesomeIcon icon={faFacebook}size="xl" /></a>
            <a href="" className=" ml-4"><FontAwesomeIcon icon={faYoutube}   size="xl" /></a>
            <a href="" className=" ml-4"><FontAwesomeIcon icon={faWhatsapp} size="xl"/></a>
            <a href="" className=" ml-4"><FontAwesomeIcon icon={faLinkedin}  size="xl"/></a>
            <a href="" className=" ml-4"><FontAwesomeIcon icon={faInstagram}  size="xl"/></a>
           </div>
        </div>
        </div>
       </div>
       
    </footer>

    </div>
    <div className="bg-black text-gray-400 text-center h-20 flex justify-center items-center font-medium">
        <p>@Copiright todos los derechos reservados</p>
        </div>
    </>)
}