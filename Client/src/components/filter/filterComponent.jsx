// import style from './filter.module.css'
import { Select, Option } from "@material-tailwind/react";
export default function FilterComponent(){
    return(<div className="w-screen flex justify-center">
        <div className="flex justify-center w-4/5 border-b-2 border-gray-400">
 <div className="">
    <h3 className="ml-3 font-semibold text-gray-700 text-2xl">Filtre su destino</h3>
 <div className=' flex lg:flex-row flex-col m-2 gap-5 '>
   <Select label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Select label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Select label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Select label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    <button
    className='bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded'
    >Buscar</button>
   </div>
 </div>
 </div>
    </div>)
}