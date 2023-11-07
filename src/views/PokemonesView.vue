<script setup>
import { RouterLink } from 'vue-router';
// importamos el composable que es donde llamaremos las llamadas a la api 
// esto es como lo services en reactJS
import { UsegetData } from '../composable/getData'
// aqui le recivimos haciendo una destructuracion 
const { data, getData } = UsegetData()
getData('https://pokeapi.co/api/v2/pokemon')

</script>
<template>
    <div class="contLis">
        <div>
            <button class="btn-pre" @click="getData(data.previous)" :disabled="data.previous === null">Back</button>
            <button class=" btn-next" @click="getData(data.next)" :disabled="data.next === null">Next</button>
        </div>
        <ul>
            <li v-for="pokemon, index  in data.results">
                <router-link class="router-link-pokedex" :to="`/pokemones/${pokemon.name}`">{{ index + 1 }}-- {{
                    pokemon.name
                }}</router-link>
            </li>
        </ul>

    </div>
</template>
<style lang="scss">
.contLis {

    margin-top: 90px;
    text-align: center;

    div {

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

    }
}

.btn-pre,
.btn-next {
    text-align: center;
    width: 70px;
    color: white;
    cursor: pointer;
    margin-left: 5px;
    padding: 10px;
    background-color: red;
    border-radius: 10px;
}

.btn-next:hover {
    background-color: rgb(255, 255, 255);
    color: black;
}

.btn-pre:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
}

ul {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;



}

li {
    border-radius: 50px;
    width: 150px;
    background-color: white;
    margin-top: 50px;
    color: transparent;
    font-size: 20px;
}

.router-link-pokedex {
    text-decoration: none;
    color: red;


}

.router-link-pokedex:hover {
    color: white;
}

li:hover {
    background-color: red;
}
</style>