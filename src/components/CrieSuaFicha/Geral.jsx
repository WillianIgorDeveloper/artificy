import { useCharacterSheet } from "../../hooks/useCharacterSheet";
import { books } from "../../../data";

export const Geral = () => {

   const characterSheet = useCharacterSheet()

   return (
      <form>
         <fieldset className="flex flex-col md:flex-row md:justify-evenly md:items-center">
            <legend className="hidden">Geral</legend>
            <div className="flex flex-col items-center gap-1 my-4">
               <label htmlFor="name">Nome do personagem</label>
               <input type="text" name="name" id="name" placeholder="Aventureiro" className="px-3 py-1 rounded placeholder:text-vonCount-400 text-vonCount-900 outline-none focus:outline-vanHelsing-700 bg-vanHelsing-50" onChange={e => {characterSheet.handleName(e)}} value={characterSheet.characterSheet.name ? characterSheet.characterSheet.name : ""}/>
            </div>

            <div className="p-3">
               <span className="text-xl mb-3 block text-center">Livros</span>
               <div className="flex flex-col gap-2">
                  {
                     books.map(element => {
                        return (
                           <div key={element.id}>
                              <input type="checkbox" id={element.id} value={element.id} className="mr-2" onChange={e => {characterSheet.handleBooks(e)}} checked={characterSheet.characterSheet[element.id] && true} />
                              <label htmlFor={element.id}>{element.name}</label>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </fieldset>
      </form>
   )
}






// Features para manutenção ou para excluir

   {/* <div className="flex items-start">
      <div className="p-1 text-xl rounded mr-3 bg-marcelin-500 hover:cursor-pointer md:active:scale-75" onClick={() => {characterSheet.handleImage("Delete")}} ><Trash /></div>
      <div className="flex flex-col items-center">
         {
            characterSheet.characterSheet.image === undefined
            ?  undefined
            : <img src={characterSheet.characterSheet.image} alt="Foto do personagem" className="w-28 max-h-28 absolute" />
         }
         <label htmlFor="image" className={`bg-vanHelsing-700 w-28 h-28 text-5xl text-center rounded text-vonCount-50 flex flex-col justify-center items-center shadow shadow-vanHelsing-700 z-10 hover:cursor-pointer ${characterSheet.characterSheet.image === undefined ? "" : "opacity-0"}`}><UserCirclePlus /><span className="text-sm">PNG ou JPG</span></label>
         <input type="file" name="image" id="image" accept=".jpg, .jpeg, .png" className="opacity-0 w-0 h-0" onChange={input => {characterSheet.handleImage(input)}} />
      </div>
   </div> */}