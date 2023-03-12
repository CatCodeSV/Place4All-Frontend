<script lang="ts" setup>
import { useFeature } from '@/composables/useFeature';
import { useRestaurant } from '@/composables/useRestaurant';
import { Feature } from '@/models/Feature';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import RestaurantCard from './RestaurantCard.vue';

onBeforeMount(async () => {
  loading.value = true;
  console.log(route.query.search);
  await setRestaurants();
  restaurantsToShow.value = restaurants.value;
  await setFeatures();
  mappedFeatures.value = features.value.map((feature: Feature) => {
    return {
      value: feature.name,
      title: feature.name,
    };
  });
  console.log(mappedFeatures.value);
  loading.value = false;
});
const { restaurants, setRestaurants, filterRestaurantsByFeature } = useRestaurant();
const { features, setFeatures } = useFeature();
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
const mappedFeatures = ref();
const selectedFeature = ref(null);
const restaurantsToShow = ref();

function setFiltered(filter: any[]) {
  console.log(filter);
  restaurantsToShow.value = filterRestaurantsByFeature(filter);
}
</script>

<template>
  <v-tabs fixed-tabs class="mt-4 mx-4" id="filters-tab">
    <div class="checked-drop-down-list" id="features-filter">
      <v-select
        clearable
        :items="mappedFeatures"
        chips
        label="Necesidades"
        multiple
        v-model="selectedFeature"
        @update:model-value="setFiltered">
      </v-select>
    </div>
    <div class="checked-drop-down-list" id="stars-filter">
      <v-select clearable :items="['Orden Ascendente', 'Orden Descendente']" label="Valoraciones"> </v-select>
    </div>
  </v-tabs>
  <span class="span-filtered-results"> {{ restaurants.length }} Resultados </span>
  <v-row class="pa-6">
    <v-col cols="12" md="3" sm="6" v-for="restaurant of restaurantsToShow" :key="restaurant.id.toString()">
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
#features-filter {
  margin-left: 2rem;
}
.span-filtered-results {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: smaller;
  color: grey;
  margin-left: 4rem;
}
</style>
