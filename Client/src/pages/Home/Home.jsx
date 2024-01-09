import style from './Home.module.css'
import React from 'react';
export default function Home(){
    return(
        <div className={style.div}>
        <h1 className={style.letra}>Tu destino sín limites</h1>     
        <button className={style.button}>Destinos</button>
        <button className={style.button}>Servicios a empresas</button>
        <h2 className={style.letra}>¿Quiénes somos?</h2>
        <img src="https://media.licdn.com/dms/image/C4D03AQF6vgPW5YUH4w/profile-displayphoto-shrink_800_800/0/1623417429856?e=1710374400&v=beta&t=RYnScA5MgAwCRvYSSITSTRaXKSOxPJKLjyqpg_4DpDQ" alt="Fundadora 1"/>
        
        <a href="https://media.licdn.com/dms/image/C4D03AQF6vgPW5YUH4w/profile-displayphoto-shrink_800_800/0/1623417429856?e=1710374400&v=beta&t=RYnScA5MgAwCRvYSSITSTRaXKSOxPJKLjyqpg_4DpDQ">
        <img src="ruta-de-la-imagen.jpg" alt="Fundadora 2"/>
        </a>
        <p className={style.letraTexto}>Somos una empresa formada por personas con discapacidad, comprometida con la diversidad, la inclusión y el bienestar de todas las personas. Nos dedicamos a generar un puente entre la oferta y la demanda de servicios turísticos adaptados, trabajando dentro del marco de la responsabilidad social empresaria para lograr un impacto positivo en la sociedad.</p>
        <h3 className={style.letra}>Nuestra Mision</h3>
        <p className={style.letraTexto}>SÍ, VOY tiene como misión generar experiencias positivas en las personas con movilidad reducida, por medio de la gestión y promoción del turismo accesible y la transformación de entornos en inclusivos, para garantizar el disfrute del ocio con autonomía.</p>
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
       <script>
        // Función para ir al inicio
        function irAlInicio() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        </script>
        </div>
        );
}
