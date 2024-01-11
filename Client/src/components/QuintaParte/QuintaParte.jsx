import style from './QuintaParte.module.css'
export default function QuintaParte(){
    return(
        <div>
       <div>
       <h3 className={style.letra}>Nuestras alianzas</h3>
       </div>
       <div className={style.imgConteiner}>
        <img className={style.imagen} src="https://www.semarconsultora.com/images/web/pensiones.png" alt="Alianza 1" />
        <img className={style.imagen} src="https://www.semarconsultora.com/images/web/pensiones.png" alt="Alianza 2" />
       </div>
        </div>);}