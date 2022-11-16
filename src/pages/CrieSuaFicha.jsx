import { Link, Outlet, useResolvedPath, useMatch } from "react-router-dom"

export const CrieSuaFicha = () => {

   return (
      <main>
         <section className="container m-auto p-2">
            <div className="flex items-center gap-6 relative -bottom-3 -z-10">
               <img src="/wizard.png" alt="Mago" className="w-28" />
               <h2 className="text-center text-3xl font-semibold">Crie a sua ficha!</h2>
            </div>

            <ul className="flex overflow-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-vonCount-600">
               <MenuItem to=''>Geral</MenuItem>
               <MenuItem to='raca'>Raça</MenuItem>
               <MenuItem to='classe'>Classe</MenuItem>
               <MenuItem to='atributos'>Atributos</MenuItem>
               <MenuItem to='descricao'>Descrição</MenuItem>
               <MenuItem to='equipamento'>Equipamento</MenuItem>
               <MenuItem to='ficha'>Ficha</MenuItem>
            </ul>

            <div className="bg-vonCount-800 rounded-b-xl p-4">
               <Outlet />
            </div>
         </section>

         {/* <div className="w=full p-10 flex flex-col items-center justify-center">
            <img src="/maintenance.png" alt="Manutenção" />
            <h1 className="text-2xl font-mono p-4 text-center">O ferreiro está fazendo manutenção nesta página!</h1>
         </div> */}
      </main>
   )
}

const MenuItem = ({to, children}) => {

   const path = useResolvedPath(to)
   const isActive = useMatch({path: path.pathname})

   return (
      <li className="flex-1"><Link to={to} className={`block py-2 px-4 rounded-t-xl ${isActive ? "bg-vonCount-800 cursor-auto" : "bg-vonCount-700"}`}>{children}</Link></li>
   )
}