
  import { Button } from "@material-tailwind/react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEarthAmericas , faWheelchair} from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
    return (
      <>
      <nav id="header" className="w-full z-30  py-1  shadow-lg  flex  justify-center">
      <div className="bg-white w-4/5 flex justify-between items-center">
      <section>
         <h1 className=" font-extrabold text-pink-400 text-2xl"><FontAwesomeIcon icon={faEarthAmericas} /> <FontAwesomeIcon icon={faWheelchair} /> Si, Voy</h1>
      </section>
      <section>
                <ul className="md:flex items-center text-base text-white pt-4 md:pt-0">
                   <li><a className="inline-block no-underline text-pink-400 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Inicio</a></li>
                   <li><a className="inline-block no-underline text-pink-400 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Academia</a></li>
                   <li><Button>LogIn</Button></li>
               </ul>
      </section>
      </div>
   </nav>
      </>
    );
  }
  