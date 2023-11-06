<script setup>
import axios from 'axios'
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const pokemones = ref([])
axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        pokemones.value = response.data.results
    })
    .catch(error => console.error(error));

</script>



<template>
    <ul>
        <li v-for="pokemon in pokemones">
            <router-link class="router-link-pokedex" :to="`/pokemones/${pokemon.name}`">{{ pokemon.name }}</router-link>
        </li>
    </ul>
</template>
<style lang="scss">
li {
    margin-top: 5px;
    color: white;
    font-size: 20px;
}

.router-link-pokedex {
    text-decoration: none;
    color: white;


}

li:hover {
    color: red;
}
</style>