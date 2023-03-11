<script lang="ts" setup>
import { useRestaurant } from '@/composables/useRestaurant';
import { Feature } from '@/models/Feature';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import RestaurantCard from './RestaurantCard.vue';

onBeforeMount(async () => {
  loading.value = true;
  console.log(route.query.search);
  await setRestaurants();
  loading.value = false;
});
const { restaurants, setRestaurants } = useRestaurant();
const loading = ref(false);
const selection = ref(1);
const rating = ref(4.5);
const route = useRoute();

function reserve() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
}

//Para el filtro de features/necesidades
const features = ref<Feature[]>([]);
const selectedFeature = ref(null);
</script>

<template>
  <v-tabs fixed-tabs class="mt-4 mx-4" id="filters-tab">
    <div class="checked-drop-down-list">
      <v-select clearable :items="features" chips label="Necesidades" multiple v-model="selectedFeature"> </v-select>
    </div>
    <div class="checked-drop-down-list">
      <v-select clearable :items="['Orden Ascendente', 'Orden Descendente']" label="Valoraciones"> </v-select>
    </div>
  </v-tabs>
  <span> {{ restaurants.length }} Resultados </span>
  <v-row class="pa-6">
    <v-col cols="12" md="3" sm="6" v-for="restaurant of restaurants" :key="restaurant.id.toString()">
      <RestaurantCard :restaurant="restaurant" />
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
#filters-tab {
  flex: 0 1 auto;
}
.checked-drop-down-list {
  width: 12.5rem;
}
</style>
