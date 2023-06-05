<script lang="ts" setup>
import { useRestaurant } from '@/composables/useRestaurant';
import { Restaurant } from '@/models/Restaurant';
import { RestaurantSummarized } from '@/models/RestaurantSummarized';
import { onBeforeMount, ref } from 'vue';

function favRestaurant(restaurant: Restaurant) {
  return `${restaurant.name}`;
}

const favoriteRestaurants = ref<RestaurantSummarized[]>([]);
onBeforeMount(async () => {
  favoriteRestaurants.value = await getFavoriteRestaurants();
});

const { getFavoriteRestaurants } = useRestaurant();
</script>

<template>
  <!-- <v-layout class="layout-datos d-flex w-100 h-100" style="height: auto"> -->
  <v-layout class="titulo-pantalla-usuario" style="height: auto">
    <div class="lista-titulo bg-primary">
      <p class="titulo">Favoritos</p>
    </div>
    <v-layout class="lista-texto" v-if="favoriteRestaurants.length > 0">
      <v-list-item
        v-for="favRestaurant in favoriteRestaurants"
        :key="favRestaurant.id"
        style="cursor: pointer"
        @click="$router.push(`/restaurants/${favRestaurant.id}`)">
        <v-list-item-title>{{ favRestaurant.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ favRestaurant.address }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Luagres de ocio favoritos" style="cursor: pointer">{{ favRestaurant }} </v-list-item>
    </v-layout>
    <div v-if="favoriteRestaurants.length === 0" class="w-100 h-100 justify-center align-center">
      <h3 class="text-h4">¡Añade restaurantes a tu lista de favoritos!</h3>
    </div>
  </v-layout>
</template>

<style scoped>
.lista-titulo {
  padding: 12px;
  padding-left: 50%;
  padding-right: 50%;
  margin-top: 7.5px;
  font-size: unset;
  font-family: 'Roboto';
  text-transform: uppercase;
  height: 48px;
  display: none;
}

.titulo {
  font-size: unset;
}

h3.text-h4 {
  display: flex;
  justify-content: center;
}
h3.text-h4[data-v-37ffa565] {
  display: flex;
  justify-content: center;
  margin: 1%;
}

@media (max-width: 600px) {
  .datos-perfil {
    margin-left: 10% !important;
  }
  h3.text-h4[data-v-37ffa565] {
    display: flex;
    font-size: 1rem !important;
    line-height: 1.5rem !important;
    justify-content: center;
    text-align: center;
    /* padding-top: 5%; */
    margin: 5%;
    /* width: 90%; */
  }
  .lista-titulo {
    padding: 12px;
    padding-left: 30%;
    padding-right: 50%;
    margin-top: 7.5px;
    font-size: unset;
    font-family: 'Roboto';
    text-transform: uppercase;
    height: 48px;
    display: flex;
  }
  .v-layout.titulo-pantalla-usuario {
    display: flex;
    flex-direction: column;
  }
}
.datos-perfil {
  display: flex;
  align-items: center;
}
.datos-perfil h4 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
