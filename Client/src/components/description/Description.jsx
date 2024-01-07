import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faPhone , faEnvelope, faGlobe} from "@fortawesome/free-solid-svg-icons"
export default function Description(){
    return(<>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-4 text-gray-700">
        <section>
        <h1 className="mt-4 font-bold text-2xl  text-pink-600 mb-5">Nombre del lugar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem at quidem, provident repellendus soluta debitis consectetur quas ratione unde blanditiis nesciunt! Harum doloribus quidem rem. Saepe laborum esse adipisci nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere modi porro vitae eum maiores quod, explicabo, ea ad temporibus, illum quam nobis aperiam aliquam fugit maxime quo cumque? At, temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, adipisci nostrum? Deleniti quae molestiae veniam atque ipsa quas odio quaerat velit tenetur et veritatis, sint voluptas delectus perspiciatis. Magnam, voluptatum?
            lor
        </p>
        </section>
        <section className=" text-center  flex flex-col  items-center">
        <h3 className="mt-4 font-semibold text-pink-600  text-center mb-5  ">Información de contacto</h3>
          <div className=" w-max flex flex-col gap-2 ">
          <p className="flex "><FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#00ff00",}} className="mr-2" />+53 11 2345 2345</p>
            <p className="flex"><FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#1d58bf"}} className="mr-2"/>sivoy@gmail.com</p>
            <p className="flex"><FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#2a4f8d",}}className="mr-2"/>+54 11 4583 2020</p>
            <p className="flex"><FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#4287ff",}} className="mr-2" />facebook</p>
            <p className="flex"><FontAwesomeIcon icon={faGlobe} size="xl" style={{color: "#2a4f8d",}} className="mr-2"/>http://www.sivoy.com.ar/Destinos/Detalle/7366</p>
          </div>
        </section>
        </div>
    </>)
}