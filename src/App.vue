<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/pokemones">
      <h1>POKEMONS</h1>
    </RouterLink>
    <nav>
      <RouterLink class="RouterLink-nav" to="/pokemones"> Pokedex</RouterLink>
      <RouterLink class="RouterLink-nav" to="/pokemones/fav"> FAV</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>

<style lang="scss">
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

header {
  height: 50px;
  position: relative;
  top: 0;
  text-align: center;
}

h1 {
  color: red;
}

body {
  height: 100vh;
  background-color: rgb(35, 34, 34);
}



.RouterLink-nav {
  font-size: 40px;
  text-decoration: none;
  color: white;
}

.RouterLink-nav:hover {
  color: red;
}

.notfoundpoke {
  position: relative;
  top: 200px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: white;
}
</style>
