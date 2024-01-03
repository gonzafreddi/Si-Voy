import CardComponent from '../../components/card/CardComponent.jsx'
import FilterComponent from '../../components/filter/filterComponent.jsx'
import TitleSiVoy from '../../components/title/title.jsx'
import style from './destination.module.css'

export default function Desination(){
    return(<>
        <div className={style.conteiner}>
        <TitleSiVoy/>
        <section className={`${style.imageCont} `}>
            <div className={style.capa}></div>
            <img src="https://plus.unsplash.com/premium_photo-1681996922112-1dbeb36cd4ec?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     
        </section>
        <FilterComponent/>
        <section className=' w-screen flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-4/5'>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        </div>
        </section>
        </div>
        </>)
}