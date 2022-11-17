import { FloppyDisk } from "phosphor-react"
import { useCharacterSheet } from "../../hooks/useCharacterSheet"

export const Ficha = () => {

   const characterSheet = useCharacterSheet()

   return (
      <div className="p-2">
         <span className="text-center print:block text-vanHelsing-500 hidden text-2xl my-3 font-semibold">Ficha de personagem</span>
         <div className="">
            <div className="text-right flex flex-col">
               {
                  characterSheet.characterSheet.caldeiraoDeTashaParaTudo && <span className="text-xs text-right">Caldeirao de Tasha para tudo</span>
               }
               {
                  characterSheet.characterSheet.guiaDeXanatharSobreTodasAsCoisas && <span className="text-xs text-right">Guia de Xanathar sobre Todas as Coisas</span>
               }
               {
                  characterSheet.characterSheet.guiaDoVoloParaMonstros && <span className="text-xs text-right">Guia do Volo para Monstros</span>
               }
               {
                  characterSheet.characterSheet.monstrosDoMultiverso && <span className="text-xs text-right">Monstros do Multiverso</span>
               }
            </div>
            <div>
               {
                  characterSheet.characterSheet.name && <span className="text-2xl m-3 font-semibold">{characterSheet.characterSheet.name}</span>
               }
            </div>
         </div>
         <a href="https://artificy.vercel.app" className="font-serif text-center text-vanHelsing-700 text-2xl mt-4 hidden print:block">Artificy</a>
         <button className="flex items-center gap-2 text-lg m-auto mt-3 rounded px-3 py-1 bg-blade-700 hover:cursor-pointer print:hidden md:active:scale-95 hover:bg-blade-800" onClick={() => {window.print()}}><FloppyDisk className="text-2xl " /> Salvar</button>
      </div>
   )
}