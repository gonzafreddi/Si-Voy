import MapaFrame from "../../components/Mapa/Mapa"
import { CarouselDefault } from "../../components/carousel/Carousel"
import Description from "../../components/description/Description"
export default function Detail(){
    return(<>
    <div className=" min-h-screen w-screen text-black flex justify-center">
    <section className=" w-4/5">
        <h3 className=" font-semibold mt-5 mb-2 text-pink-600">Categoria</h3>
        <div className=" ">
            <CarouselDefault/>
            <Description/>
            <MapaFrame/>
        </div>
        
    </section>
  
    </div>
    </>)
}