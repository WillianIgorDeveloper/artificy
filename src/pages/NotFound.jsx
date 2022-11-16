export const NotFound = () => {

   return (
      <div className="w-screen h-screen top-0 left-0 fixed flex flex-col items-center justify-center bg-vonCount-900 text-center z-50">
         <img src="/map.png" alt="" />
         <span className="text-5xl text-marcelin-400 font-bold">404</span>
         <h1 className="text-2xl font-mono p-2">Tesouro não encontrado!</h1>
         <h2 className="text-lg font-mono p-4">Página não encontrada</h2>
      </div>
   )
}