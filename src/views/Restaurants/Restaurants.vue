<script lang="ts" setup>
import { useRestaurant } from '@/composables/useRestaurant';
import { Restaurant } from '@/models/Restaurant';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RestaurantCard from './RestaurantCard.vue';

onBeforeMount(async () => {
  loading.value = true;
  console.log(route.query.search);
  if (restaurants.value.length == 0) {
    await setRestaurants();
  }
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
async function goToDetail(restaurant: Restaurant) {
  await setRestaurant(restaurant.stringId);
  router.push('/restaurantes/' + restaurant.stringId);
}
</script>

<template>
  <v-row>
    <v-col v-if="!loading" cols="12" md="3" sm="6" v-for="restaurant of restaurants" :key="restaurant.stringId">
      <RestaurantCard :restaurant="restaurant" @click="goToDetail(restaurant)" />
    </v-col>
    <v-col v-if="loading" cols="12" md="3" sm="6" v-for="(n, index) in 10" :key="index">
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear :active="isActive" color="secondary" height="4" indeterminate></v-progress-linear>
        </template>
      </v-card>
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
