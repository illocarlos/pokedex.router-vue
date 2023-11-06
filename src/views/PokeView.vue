<script setup>
import axios from 'axios';
import { ref } from 'vue';
//este hook tiene acceso a los parametros es decir al params.name y recoge la informacion
//de ese objeto en concreto
import { useRoute } from 'vue-router';
//lo iniciaizamos y activamos el hook
const route = useRoute();
const poke = ref({})


//forma de llamar una api mas acorde 
const getData = async () => {
    try {
        const { data } = await axios.get
            (`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        poke.value = data;
        console.log(poke.value)
    } catch (error) {
        console.log(error)
    }

}
getData();
</script>

<template>
    <div class="title-poke">
        <h1>{{ $route.params.name }}</h1>

        <div class="date-poke">
            <div>
                <p>normal</p>
                <img :src="poke.sprites.front_default" alt="">
            </div>
            <div>
                <p>shiny</p>
                <img :src="poke.sprites.front_shiny" alt="">
            </div>
        </div>
        <!-- <div class="total">
                <div class="moove" v-for="pokemon in poke.moves">
                    <p>{{ pokemon.move.name }}</p>
                </div> -->
        <!-- </div> -->
    </div>
</template>
<style lang="scss">
.title-poke {

    display: flex;
    flex-flow: column nowrap;
}

.date-poke {
    margin-top: 2px;
    display: flex;
    flex-flow: row nowrap;

    p {
        color: white;
    }

    div {
        display: flex;
        flex-flow: column nowrap;
    }
}

.total {
    position: relative;
    top: 200px;
    height: 800px;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;

    .moove {
        height: 20px;
        width: 20px;
        display: flex;
        flex-flow: row nowrap;

        p {
            width: 5px;
            color: white;
        }
    }
}
</style>