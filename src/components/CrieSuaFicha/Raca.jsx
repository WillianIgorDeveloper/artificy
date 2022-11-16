import { livroDoJogador, guiaDoVoloParaMonstros, monstrosDoMultiverso } from "../../../data"
import { useCharacterSheet } from "../../hooks/useCharacterSheet"

export const Raca = () => {

   const characterSheet = useCharacterSheet()

   return (
      <form>
         <fieldset className="flex flex-col items-center text-center py-4">
            <legend className="hidden">Raça</legend>

            <div className="flex flex-col w-full max-w-sm">
               <label htmlFor="race">Escolha sua raça:</label>
               <select name="race" id="race" className="bg-vonCount-700 text-vonCount-100 px-3 py-2 rounded">
                  <option value="">Raças</option>
                  <optgroup label="Livro do Jogador">
                     {
                        livroDoJogador.races.listOfRaces.map(element => {
                           return (
                              <option key={element.id} value={element.id}>{element.name}</option>
                           )
                        })
                     }
                  </optgroup>
                  {/* {
                     characterSheet.characterSheet.guiaDoVoloParaMonstros &&
                     <optgroup label="Guia do Volo para Monstros">
                        {
                           guiaDoVoloParaMonstros.races.listOfRaces.map(element => {
                              return (
                                 <option key={element.id} value={element.id}>{element.name}</option>
                              )
                           })
                        }
                     </optgroup>
                  }
                  {
                     characterSheet.characterSheet.monstrosDoMultiverso &&
                     <optgroup label="Monstros do Multiverso">
                        {
                           monstrosDoMultiverso.races.listOfRaces.map(element => {
                              return (
                                 <option key={element.id} value={element.id}>{element.name}</option>
                              )
                           })
                        }
                     </optgroup>
                  } */}
               </select>
            </div>

            
         </fieldset>
      </form>
   )
}