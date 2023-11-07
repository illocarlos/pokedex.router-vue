import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavStore = defineStore('fav', () => {

    const fav = ref([])

    const add = (poke) => {
        fav.value.push(poke)
    }

    const remove = (id) => {
        fav.value = fav.value.filter(item => item.id !== id)
    }
    const encuentraPoke = (name) => fav.value.find((item) => item.name === name)

    return {
        fav,
        add,
        remove,
        encuentraPoke
    }
})