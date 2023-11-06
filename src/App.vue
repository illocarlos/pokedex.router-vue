<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>POKEMONS</h1>
    <nav>
      <RouterLink to="/pokemones"> Pokedex</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>
<style lang="scss">
header {
  height: 50px;
  position: absolute;
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
</style>
