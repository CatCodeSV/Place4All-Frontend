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

    <div v-if="favoriteRestaurants.length === 0" class="lista-texto w-100 h-100 justify-center align-center">
      <h3 class="text-h4">No tienes favoritos</h3>
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
  display: flex;
  justify-content: center;
}
.lista-texto {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.titulo {
  font-size: unset;
}
h3.text-h4 {
  display: none;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  justify-content: center;
  text-align: center;
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin-top: 10%;
  padding: 20px;
  line-height: 2.5rem !important;
}

@media (max-width: 600px) {
  .datos-perfil {
    margin-left: 10% !important;
  }

  h3.text-h4 {
    display: none;
    justify-content: center;
  }
  h3.text-h4 {
    display: flex;
    word-break: normal;
    word-wrap: break-word;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    line-height: 1.5rem;
    justify-content: center;
    margin-top: 30%;
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
.titulo-pantalla-usuario {
  display: flex;
  flex-direction: column;
  /* margin: 20%; */
}
</style>
