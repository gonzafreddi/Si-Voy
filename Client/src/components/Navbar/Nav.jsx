import { Button } from "@material-tailwind/react";
export default function Nav() {
    return (
      <>
      <nav id="header" className="w-full z-30  py-1 bg-black shadow-lg   ">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input className="hidden" type="checkbox" id="menu-toggle"/>
         
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
        <img src="http://www.sivoy.com.ar/assets/images/logo.png" alt="" />
            </nav>
         </div>
         
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
            <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                  <li><a className="inline-block no-underline hover:text-yellow-800 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Inicio</a></li>
                  <li><a className="inline-block no-underline hover:text-yellow-800 font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Academia</a></li>
               </ul>
               <Button  color="white">Log in</Button>
            </div>
         </div>
      </div>
   </nav>
      </>
    );
  }
  