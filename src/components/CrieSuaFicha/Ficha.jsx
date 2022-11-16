import { FloppyDisk } from "phosphor-react"
import { useCharacterSheet } from "../../hooks/useCharacterSheet"

export const Ficha = () => {

   const characterSheet = useCharacterSheet()

   return (
      <div className="p-2">
         <span className="text-center text-vanHelsing-700 text-2xl mt-4 hidden print:block">Ficha de personagem</span>
         {
            characterSheet.characterSheet.name && <span className="text-2xl m-3 font-semibold">{characterSheet.characterSheet.name}</span>
         }
         <a href="https://artificy.vercel.app" className="font-serif text-center text-vanHelsing-700 text-2xl mt-4 hidden print:block">Artificy</a>
         <button className="flex items-center gap-2 text-lg m-auto mt-3 rounded px-3 py-1 bg-blade-700 hover:cursor-pointer print:hidden md:active:scale-95 hover:bg-blade-800" onClick={() => {window.print()}}><FloppyDisk className="text-2xl " /> Salvar</button>
      </div>
   )
}