import { useEffect, useState } from "react"

export const useCharacterSheet = () => {

   const [handleDelete, setHandleDelete] = useState(true)

   const [characterSheet, setCharacterSheet] = useState(
      localStorage.characterSheet
      ? JSON.parse(localStorage.characterSheet)
      : {}
   )

   useEffect(() => {
      localStorage.characterSheet = JSON.stringify(characterSheet)
   }, [characterSheet, handleDelete])

   return {
      characterSheet,
      setCharacterSheet,

      handleImage: (input) => {
         if (input === "Delete") {
            delete characterSheet.image
            setHandleDelete(!handleDelete)
         } else {
            setCharacterSheet({...characterSheet, image: URL.createObjectURL(input.target.files[0])})
         }
      },

      handleName: (e) => {
         if (e.target.value === '') {
            delete characterSheet.name
            setHandleDelete(!handleDelete)
         } else {
            setCharacterSheet({...characterSheet, name: e.target.value})
         }
      },

      handleBooks: (e) => {
         if (e.target.checked) {
            setCharacterSheet({...characterSheet, [e.target.value]: e.target.checked})
         } else {
            delete characterSheet[e.target.value]
            setHandleDelete(!handleDelete)
         }
      },

      handleRace: (e) => {
         delete characterSheet.subRace
         delete characterSheet.choices
         if (e.target.value === '') {
            delete characterSheet.race
            setHandleDelete(!handleDelete)
         } else {
            setCharacterSheet({...characterSheet, race: e.target.value})
         }
      },

      handleSubRace: (e) => {
         if (e.target.value === '') {
            delete characterSheet.subRace
            setHandleDelete(!handleDelete)
         } else {
            setCharacterSheet({...characterSheet, subRace: e.target.value})
         }
      },

      handleChoices: (e) => {
         if (e.target.value === '') {
            delete characterSheet.choices[e.target.name]
            setHandleDelete(!handleDelete)
         } else {
            setCharacterSheet({...characterSheet, choices: {...characterSheet.choices, [e.target.name]: e.target.value}})
         }
      }
   }
}