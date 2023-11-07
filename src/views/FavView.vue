<script setup>
import { useFavStore } from '@/store/fav'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';


const useFav = useFavStore()
const { fav } = storeToRefs(useFav)
const { remove } = useFav


</script>

<template>
    <div class="fav-div">
        <div>
            <h1 class="h1-team" v-if="fav.length === 0">SIN EQUIPO</h1>
            <h1 class="h1-team" v-else> MI EQUIPO</h1>
        </div>
        <ul class="list-fav">
            <li v-for="pokeFav in fav" :key="pokeFav.id">
                <div class="card">
                    <img :src="pokeFav.sprites?.front_default" alt="">
                    <p>N{{ pokeFav.id }}-{{ pokeFav.name }}</p>
                    <div class="colum-btn">
                        <button @click="remove(pokeFav.id)">eliminar</button>
                        <RouterLink class="link-Detail" :to="`/pokemones/${pokeFav.name}`">detalles</RouterLink>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.fav-div {



    .h1-team {
        text-align: center;

    }

}

.list-fav {
    color: transparent;
    display: flex;
    flex-flow: row nowrap;
    margin-left: 5px;

    li {
        text-align: center;
        margin-left: 5px;
        color: transparent;

        .card {
            height: 390px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;

            img {
                width: 70%;
            }

            p {
                color: black;
            }

            p:hover {
                color: white;
            }

            button {
                cursor: pointer;
                padding: 10px;
                border-radius: 20px;
            }

            button:hover {
                background-color: red;
                color: white;
            }

            .link-Detail {
                border: 1px solid rgb(74, 72, 72);
                padding: 5px;
                border-radius: 20px;
                text-decoration: none;
                color: white;
                background-color: red;
            }

            .link-Detail:hover {

                color: rgb(0, 0, 0);
                background-color: white;
            }
        }


    }


}
</style>