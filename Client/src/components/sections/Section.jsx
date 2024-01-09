/* eslint-disable react/prop-types */
// import CardComponent from "../card/CardComponent";
import Card from "../card/Card";

export default function Section(props){
    return(<div>
        <section className="  flex justify-center items-start flex-col mb-4">
        <header className="flex justify-between w-full">
              <h3 className="text-2xl text-gray-800 mb-4">{props.name}</h3>
              <p className="text-sm text-blue-500 cursor-pointer">Ver Todos</p>
        </header>
            <div className='w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    </div>)
}