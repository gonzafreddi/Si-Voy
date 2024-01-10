/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
import style from './Home.module.css'
import PrimeraParte from '../../components/Primera parte/PrimeraParte';
import SegundaParte from '../../components/Segunda Parte/SegundaParte';
import TerceraParte from '../../components/TerceraParte/TerceraParte';
// import CuartaParte from '../../components/CuartaParte/CuartaParte';
// import QuintaParte from '../../components/QuintaParte/QuintaParte';
export default function Home(){




    return(
        <div>
        <PrimeraParte />
        <SegundaParte />
        <TerceraParte />
        {/* <CuartaParte />
        <QuintaParte /> */}
        <span className={style.letra}>Nuestras Alianzas</span>
        <a href="https://media.licdn.com/dms/image/C4D03AQF6vgPW5YUH4w/profile-displayphoto-shrink_800_800/0/1623417429856?e=1710374400&v=beta&t=RYnScA5MgAwCRvYSSITSTRaXKSOxPJKLjyqpg_4DpDQ">
        <img src="ruta-de-la-imagen.jpg" alt="Alianza 1"/>
        </a>
        <a href="https://media.licdn.com/dms/image/C4D03AQF6vgPW5YUH4w/profile-displayphoto-shrink_800_800/0/1623417429856?e=1710374400&v=beta&t=RYnScA5MgAwCRvYSSITSTRaXKSOxPJKLjyqpg_4DpDQ">
        <img src="ruta-de-la-imagen.jpg" alt="Alianza 2"/>
        </a>
        <h4 className={style.letra}>¡Conocé nuestras historias en nuestro blog!</h4>
        <button className={style.button}>Ver más</button>
        <div id="whatsapp-button" class="whatsapp-button">
        <a href="https://api.whatsapp.com/send?phone=TUNUMERO" target="_blank">
        <img src="whatsapp-icon.png" alt="WhatsApp"/>
        </a>
        </div>
        <button id="btnInicio" onclick="irAlInicio()">Ir al Inicio</button>
       {/* <script>
        // Función para ir al inicio
        function irAlInicio() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        </script> */}
        </div>
        );
}
