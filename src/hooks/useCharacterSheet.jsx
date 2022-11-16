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
      }
   }
}