<script lang="ts" setup>
import { useRestaurant } from '@/composables/useRestaurant';
import { onBeforeMount, ref } from 'vue';
import RestaurantCard from './RestaurantCard.vue';

onBeforeMount(async () => {
  loading.value = true;
  await setRestaurants();
  loading.value = false;
});
const { restaurants, setRestaurants } = useRestaurant();
const loading = ref(false);
const selection = ref(1);
const rating = ref(4.5);

function reserve() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
</script>

<template>
  <div>
    <RestaurantCard v-for="restaurant of restaurants" :key="restaurant.id.toString()" :restaurant="restaurant" />
  </div>
</template>

<style scoped></style>
