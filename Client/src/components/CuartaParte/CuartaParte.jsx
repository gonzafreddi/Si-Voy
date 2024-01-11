import style from './CuartaParte.module.css'
export default function CuartaParte(){
    return(
        <div className={style.conteiner}>
       <div>
       <h3 className={style.letra}>¡Conocé nuestras historias en nuestro blog!</h3>
       <button className={style.button}>Ver más</button>
       </div>
       <div className={style.imgConteiner}>
        <img src="https://www.semarconsultora.com/images/web/pensiones.png" alt="Blog" />
       </div>
        </div>);}