<script lang="ts" setup>
import { useRestaurant } from '@/composables/useRestaurant';
import { Restaurant } from '@/models/Restaurant';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RestaurantCard from './RestaurantCard.vue';

onBeforeMount(async () => {
  loading.value = true;
  console.log(route.query.search);
  await setRestaurants();
  let mappedRestaurants = restaurants.value.map((restaurant: Restaurant) => {});
  loading.value = false;
});
const { restaurants, setRestaurants, setRestaurant } = useRestaurant();
const route = useRoute();
const router = useRouter();
const loading = ref(false);

function reserve() {
  loading.value = true;

  router.push('/restaurantes/1');

  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
function goToDetail(restaurant: Restaurant) {
  setRestaurant(restaurant);
  router.push('/restaurantes/' + restaurant.id);
}
</script>

<template>
  <v-row>
    <v-col cols="12" md="3" sm="6" v-for="restaurant of restaurants" :key="restaurant.id.toString()">
      <RestaurantCard :restaurant="restaurant" @click="goToDetail(restaurant)" />
    </v-col>
  </v-row>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.images {
  display: flex;
}
</style>
