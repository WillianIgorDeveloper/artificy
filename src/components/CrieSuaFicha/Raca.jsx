import { livroDoJogador, races } from "../../../data"
import { useCharacterSheet } from "../../hooks/useCharacterSheet"

export const Raca = () => {

   const characterSheet = useCharacterSheet()

   return (
      <div className="py-4 md:flex gap-11 md:items-center md:justify-evenly">
         <form className="md:w-1/2">
            <fieldset>
               <legend className="hidden">Raça</legend>

               <div className="flex flex-col gap-5">
                  <div className="flex flex-col w-full">
                     <label htmlFor="race">Escolha sua raça:</label>
                     <select name="race" id="race" className="bg-vonCount-700 text-vonCount-100 px-3 py-2 rounded outline-none focus:outline-vanHelsing-700" onChange={(e) => {characterSheet.handleRace(e)}} defaultValue={characterSheet.characterSheet.race && characterSheet.characterSheet.race}>
                        <option value="">Raças</option>
                        <optgroup label="Livro do Jogador">
                           {
                              livroDoJogador.listOfRaces.map(element => {
                                 return (
                                    <option key={element.id} value={element.id}>{element.name}</option>
                                 )
                              })
                           }
                        </optgroup>
                     </select>
                  </div>

                  {
                     characterSheet.characterSheet.race &&
                        races[characterSheet.characterSheet.race].choices &&
                           races[characterSheet.characterSheet.race].choices.map(element => {
                              return (
                                 <div key={element.id} className="flex flex-col w-full">
                                    <label htmlFor={element.id}>{element.name}</label>
                                    <select name={element.id} id={element.id} className="bg-vonCount-700 text-vonCount-100 px-3 py-2 rounded outline-none focus:outline-vanHelsing-700" onChange={e => {characterSheet.handleChoices(e)}} defaultValue={characterSheet.characterSheet.choices ? characterSheet.characterSheet.choices[element.id] && characterSheet.characterSheet.choices[element.id] : ""}>
                                       <option value="">{element.label}</option>
                                          {
                                             element.options.map(item => {
                                                return (
                                                   <option key={item.id} value={item.id}>{item.name}</option>
                                                )
                                             })
                                          }
                                    </select>
                                 </div>                          
                              )
                           })
                  }

                  {
                     characterSheet.characterSheet.race &&
                        races[characterSheet.characterSheet.race].subRace ?
                           <div className="flex flex-col w-full">
                              <label htmlFor="subRace">Escolha sua Sub-raça:</label>
                              <select name="subRace" id="subRace" className="bg-vonCount-700 text-vonCount-100 px-3 py-2 rounded outline-none focus:outline-vanHelsing-700" onChange={(e) => {characterSheet.handleSubRace(e)}} defaultValue={characterSheet.characterSheet.subRace && characterSheet.characterSheet.subRace}>
                                 <option value="">Sub-Raças</option>
                                    {
                                       races[characterSheet.characterSheet.race].subRace.options.map(element => {
                                          return (
                                             <option key={element.id} value={element.id}>{element.name}</option>
                                          )
                                       })
                                    }
                              </select>
                           </div>
                        : undefined
                  }
                  {
                     characterSheet.characterSheet.subRace &&
                        races[characterSheet.characterSheet.race].subRace.choices &&
                           races[characterSheet.characterSheet.race].subRace.choices.map(element => {
                              
                              console.log(element)
                           //    return (
                           //       <div key={element.id} className="flex flex-col w-full">
                           //          <label htmlFor={element.id}>{element.name}</label>
                           //          <select name={element.id} id={element.id} className="bg-vonCount-700 text-vonCount-100 px-3 py-2 rounded outline-none focus:outline-vanHelsing-700" onChange={e => {characterSheet.handleChoices(e)}} defaultValue={characterSheet.characterSheet.choices ? characterSheet.characterSheet.choices[element.id] && characterSheet.characterSheet.choices[element.id] : ""}>
                           //             <option value="">{element.label}</option>
                           //                {
                           //                   element.options.map(item => {
                           //                      return (
                           //                         <option key={item.id} value={item.id}>{item.name}</option>
                           //                      )
                           //                   })
                           //                }
                           //          </select>
                           //       </div>                          
                           //    )
                           })
                  }
               </div>
            </fieldset>
         </form>

         <div className="pt-6">
            <ul className="list-disc list-inside">
            {
               characterSheet.characterSheet.race &&
                  races[characterSheet.characterSheet.race].descriptions.base.map(element => {
                     return (
                        <li key={element} className="text-sm text-vonCount-100">{element}</li>
                        )
                     })
            }
            {
               characterSheet.characterSheet.subRace &&
                  races[characterSheet.characterSheet.race].descriptions[characterSheet.characterSheet.subRace].map(element => {
                     return (
                        <li key={element} className="text-sm text-vonCount-100">{element}</li>
                        )
                     })
            }
            </ul>
         </div>
      </div>
   )
}





// Features para manutenção ou para excluir

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