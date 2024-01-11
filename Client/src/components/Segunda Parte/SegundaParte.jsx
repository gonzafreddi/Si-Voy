import style from './SegundaParte.module.css'
export default function SegundaParte(){
    return(
 <div className={style.conteiner}>

    <div className={style.imgConteiner}>
        <img className={style.foto} src="https://media.licdn.com/dms/image/C4D03AQF6vgPW5YUH4w/profile-displayphoto-shrink_800_800/0/1623417429856?e=1710374400&v=beta&t=RYnScA5MgAwCRvYSSITSTRaXKSOxPJKLjyqpg_4DpDQ" alt="Fundadora 1"/>
        <img className={style.foto} src="https://media.licdn.com/dms/image/C4D03AQF6vgPW5YUH4w/profile-displayphoto-shrink_800_800/0/1623417429856?e=1710374400&v=beta&t=RYnScA5MgAwCRvYSSITSTRaXKSOxPJKLjyqpg_4DpDQ" alt="Fundadora 2"/>
    </div>
     <div>
        <h2 className={style.letra}>¿Quienes somos?</h2>
        <p className={style.letraTexto}>Somos una empresa formada por personas con discapacidad, comprometida con la diversidad, la inclusión y el bienestar de todas las personas. Nos dedicamos a generar un puente entre la oferta y la demanda de servicios turísticos adaptados, trabajando dentro del marco de la responsabilidad social empresaria para lograr un impacto positivo en la sociedad.</p>
 </div>
        </div>);
        }