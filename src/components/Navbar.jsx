import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CaretDown, CaretUp, Gift } from "phosphor-react";
import { useState } from "react";

export const Navbar = () => {
   
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <>
         <div className="fixed w-full bg-vonCount-700 z-40">
            <div className="container m-auto flex flex-col justify-center lg:flex-row lg:justify-between">
               <div className="flex justify-between items-center px-2">
                  <h1 className="font-serif text-5xl py-3">Artificy</h1>
                  {
                     isMenuOpen
                     ? <CaretUp className="text-3xl hover:cursor-pointer lg:hidden" onClick={() => {setIsMenuOpen(!isMenuOpen)}} />
                     : <CaretDown className="text-3xl hover:cursor-pointer lg:hidden" onClick={() => {setIsMenuOpen(!isMenuOpen)}} />
                  }
               </div>
               <nav className={`self-end overflow-hidden w-full h-0 transition-height ${isMenuOpen ? "h-[204px]" : ""} lg:h-auto lg:w-auto`}>
                  <ul className="flex flex-col gap-1 py-2 lg:flex-row lg:p-0 lg:px-2">
                     <MenuItem to="/" setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} >Home</MenuItem>                 
                     <MenuItem to="/crie-sua-ficha" setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} >Crie sua ficha</MenuItem>                 
                     <MenuItem to="/sobre" setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} >Sobre</MenuItem>                 
                     <MenuItem to="/apoie" setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} >Apoie <Gift  className="text-lincoln-500 text-2xl" /></MenuItem>                 
                  </ul>
               </nav>
            </div>
         </div>
         <div className="h-[72px]"></div>
      </>
   )
}

const MenuItem = ({to, setIsMenuOpen, isMenuOpen, children}) => {

   const path = useResolvedPath(to)
   let isActive = useMatch({path: path.pathname, end: false})
   if (path.pathname === '/') {
      isActive = useMatch({path: path.pathname})
   }

   return (
      <li onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
         <Link className={`px-6 py-2 text-lg flex items-center gap-2 ${isActive ? "bg-vonCount-900 hover:cursor-default lg:hover:bg-vonCount-900" : ""} lg:rounded-t lg:hover:bg-vonCount-600`} to={to}>
            {children}
         </Link>
      </li>
   )
}