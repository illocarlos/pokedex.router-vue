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
            <router-link :to="`/pokemones/${pokemon.name}`">{{ pokemon.name }}</router-link>
        </li>
    </ul>
</template>
<style lang="scss"></style>