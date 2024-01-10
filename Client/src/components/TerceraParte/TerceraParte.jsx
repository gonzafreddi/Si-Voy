import style from './TerceraParte.module.css'
export default function TerceraParte(){
    return(
        <div className={style.conteiner}>
       <div>
       <h3 className={style.letra}>Nuestra Mision</h3>
        <p className={style.letraTexto}>SÍ, VOY tiene como misión generar experiencias positivas en las personas con movilidad reducida, por medio de la gestión y promoción del turismo accesible y la transformación de entornos en inclusivos, para garantizar el disfrute del ocio con autonomía.</p>
       </div>
       <div className={style.imgConteiner}>
        <img src="https://www.semarconsultora.com/images/web/pensiones.png" alt="" />
       </div>
        </div>);}