<script lang="ts" setup>
import { useFeature } from '@/composables/useFeature';
import { useRestaurant } from '@/composables/useRestaurant';
import { Features } from '@/models/Features';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RestaurantCard from './RestaurantCard.vue';

const { restaurants, setRestaurants, setRestaurant } = useRestaurant();
const { features, setFeatures } = useFeature();

onBeforeMount(async () => {
  loading.value = true;
  console.log(route.query.search);
  if (restaurants.value.length == 0) {
    await setRestaurants();
  }
  restaurantsToShow.value = restaurants.value;
  await setFeatures();
  mappedFeatures.value = features.value.map((feature: Features) => {
    return {
      value: feature.name,
      title: feature.name,
    };
  });
  loading.value = false;
});
const loading = ref(false);
const route = useRoute();
const router = useRouter();
//Para el filtro de features/necesidades
const mappedFeatures = ref();
const selectedFeature = ref(null);
const restaurantsToShow = ref();

function setFiltered(filter: any[]) {
  if (filter.length === 0) {
    restaurantsToShow.value = restaurants.value;
    return;
  }
  restaurantsToShow.value = restaurants.value.filter(restaurant => restaurant.servicio.some(feature => filter.includes(feature.name)));
}
</script>

<template>
  <div class="d-flex mt-10">
    <div class="checked-drop-down-list my-4 mx-10" id="features-filter">
      <v-select
        clearable
        color="secondary"
        :items="mappedFeatures"
        chips
        label="Necesidades"
        multiple
        v-model="selectedFeature"
        @update:model-value="setFiltered">
      </v-select>
    </div>
    <div class="checked-drop-down-list my-4" id="stars-filter">
      <v-select color="secondary" clearable :items="['Orden Ascendente', 'Orden Descendente']" label="Valoraciones"> </v-select>
    </div>
  </div>

  <span v-if="!loading" class="span-filtered-results mt-6"> {{ restaurantsToShow.length }} Resultados </span>
  <v-divider class="my-10" />
  <v-row class="pa-6">
    <v-col cols="12" md="3" sm="6" v-for="restaurant of restaurantsToShow" :key="restaurant.id.toString()">
      <v-skeleton-loader transition="scale-transition" :loading="loading" class="mx-auto" max-width="300" type="card">
        <RestaurantCard :restaurant="restaurant" />
      </v-skeleton-loader>
    </v-col>
    <v-col cols="12" md="3" sm="6" v-for="(n, index) in 10" :key="index"> </v-col>
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
  font-size: medium;
  color: grey;
  margin-left: 4rem;
}
</style>
