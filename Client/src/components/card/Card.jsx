import { Link } from "react-router-dom"
export default function Card(){
    
    return(<>
    <div className=" w-80">
    <header className="rounded">
        <img className=" rounded-2xl h-72" src="https://images.unsplash.com/photo-1507475380673-1246fa72eeea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHR1cmlzbW98ZW58MHx8MHx8fDA%3D" alt="" />
    </header>
    <main className=" ml-1 mt-4">
        <h2 className="text-xl font-semibold">Nombre del lugar</h2>
        <p className="text-gray-700">Gastronomia</p>
        <p className="text-gray-700">Mar del Plata</p>
    </main>
    <footer>
       <Link to="/detail/:2">
       <button className="p-1 rounded-xl bg-pink-400  text-white hover:text-pink-400 hover:bg-white hover:border-pink-400 hover:border transition-all delay-150">
            Ver mas
        </button>
       </Link>
    </footer>
    </div>
    </>)
}