import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavStore = defineStore('fav', () => {
    const fav = ref([])

    //esta condicion hace si tiene el local guardado informacion
    //que se guarde en el fav y lo convierta a ojeto con el parse
    if (localStorage.getItem('fav')) {
        fav.value = JSON.parse(localStorage.getItem('fav'))
    }

    const add = (poke) => {
        fav.value.push(poke)
        //se guarda de forma local el array en formato texto con el stringify 
        //ya que no se puede guardar de otra forma en local
        //es decir se queda en la base de dato del navegdor de chrome
        localStorage.setItem('fav', JSON.stringify(fav.value))
    }

    const remove = (id) => {
        fav.value = fav.value.filter(item => item.id !== id)
        localStorage.setItem('fav', JSON.stringify(fav.value))
    }
    const encuentraPoke = (name) => fav.value.find((item) => item.name === name)

    return {
        fav,
        add,
        remove,
        encuentraPoke
    }
})