<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { Restaurant } from '@/models/Restaurant';
import { useRouter } from 'vue-router';
import { useRestaurant } from '@/composables/useRestaurant';
import { onBeforeMount, ref } from 'vue';
import { RestaurantSummarized } from '@/models/RestaurantSummarized';

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
  <v-layout class="d-flex w-100 h-100" style="height: auto">
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

<style scoped></style>
