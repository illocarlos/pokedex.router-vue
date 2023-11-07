<script setup>
import { UsegetData } from '../composable/getData';
//este hook tiene acceso a los parametros es decir al params.name y recoge la informacion
//de ese objeto en concreto
import { useRoute } from 'vue-router';
const route = useRoute();
const { data, getData } = UsegetData()
//lo iniciaizamos y activamos el hook

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
    <div v-if="data" class="title-poke">
        <h1>{{ $route.params.name }}</h1>

        <div class="date-poke">
            <div>
                <p>normal</p>
                <img :src="data.sprites?.front_default" alt="">
            </div>
            <div>
                <p>shiny</p>
                <img :src="data.sprites?.front_shiny" alt="">
            </div>
        </div>
        <h1>Move</h1>
        <div class="total">
            <div class="moove" v-for="pokemon in data.moves">
                <p>
                    <template v-if="pokemon.version_group_details[0].level_learned_at > 0">
                        lvl {{ pokemon.version_group_details[0].level_learned_at }}-
                    </template>
                    <template v-else>
                        "Learn whith MT"->
                    </template>
                    {{ pokemon.move.name }}
                </p>
            </div>
        </div>
    </div>
    <div class="notfoundpoke" v-else>
        <h1>NO EXIXTSE EL POKE </h1>
    </div>
</template>
<style lang="scss">
.title-poke {
    margin-top: 30px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}

.date-poke {
    margin-top: 2px;
    display: flex;
    flex-flow: row nowrap;

    p {
        text-align: center;
        color: white;
    }


}

.total {
    height: 100vh;
    display: flex;
    flex-flow: row wrap;



    .moove {

        display: flex;
        flex-flow: row nowrap;

        p {

            margin-left: 20px;
            color: white;
        }
    }
}

.notfoundpoke {
    position: relative;
    top: 200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;

    h1 {
        color: red;
    }
}
</style>