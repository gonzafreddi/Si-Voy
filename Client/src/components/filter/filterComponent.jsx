// import style from './filter.module.css'
import { Select, Option , Button} from "@material-tailwind/react";
export default function FilterComponent(){
    return(<div className="w-screen flex justify-center mb-8 mt-8">
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
      <Button color="amber">Ver Mas!</Button>

   </div>
 </div>
 </div>
    </div>)
}