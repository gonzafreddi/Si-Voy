/* eslint-disable react/prop-types */
export default function ButtonPink({children}){
    return(<>
    <button className="p-1 pl-3 pr-3 rounded-xl bg-pink-400  text-white hover:text-pink-400 hover:bg-white hover:border-pink-400 hover:border transition-all delay-150">
        {children}
    </button>
    </>)
}