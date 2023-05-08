<script lang='ts' setup>
import { useFeature } from '@/composables/useFeature';
import { useRestaurant } from '@/composables/useRestaurant';
import { Features } from '@/models/Features';
import { RestaurantSummarized } from '@/models/RestaurantSummarized';
import { onBeforeMount, ref } from 'vue';
import RestaurantCard from './RestaurantCard.vue';

const { restaurants, setRestaurants, setRestaurantsQuery } = useRestaurant();
const { features, setFeatures } = useFeature();

onBeforeMount(async () => {
  loading.value = true;
  if (restaurants.value.length == 0) {
    await setRestaurants();
  }
  restaurantsToShow.value = restaurants.value;
  if (features.value.length == 0) {
    await setFeatures();
  }
  mappedFeatures.value = features.value.map((feature: Features) => {
    return {
      value: feature.id,
      title: feature.name,
    };
  });
  loading.value = false;
});
const loading = ref(false);
//Para el filtro de features/necesidades
const mappedFeatures = ref();

const selectedFeature = ref([]);
const restaurantsToShow = ref<RestaurantSummarized[]>();

async function setFiltered() {
  if (selectedFeature.value.length === 0) {
    console.log(selectedFeature.value);
    restaurantsToShow.value = restaurants.value;
    /*restaurantsToShow.value = await setRestaurantsQuery(selectedFeature.value);*/
    console.log(restaurantsToShow.value);
    return;
  }
}
</script>

<template>
  <div v-if='!loading' class='d-flex mt-10'>
    <v-row class='px-10'>
      <v-col cols='12' lg='2' sm='6' xs='6'>
        <v-select
          v-model='selectedFeature'
          :items='mappedFeatures'
          bg-color='secondaryYellow'
          chips
          clearable
          color='primary'
          label='Necesidades'
          rounded-pill
          variant='solo'
          @update:model-value='setFiltered' />
      </v-col>

      <v-col cols='12' lg='2' sm='6' xs='6'>
        <v-select
          :items="['Orden Ascendente', 'Orden Descendente']"
          bg-color='secondaryYellow'
          clearable
          label='Valoraciones'
          rounded-pill
          variant='solo'>
        </v-select>
      </v-col>
    </v-row>
  </div>

  <span v-if='!loading' class='span-filtered-results mt-6'> {{ restaurantsToShow?.length }} Resultados </span>
  <v-divider class='my-10' />
  <v-row class='pa-6'>
    <v-col v-for='(restaurant, index) in restaurantsToShow' :key='index' cols='12' md='3' sm='6'>
      <v-skeleton-loader :loading='loading' class='mx-auto' max-width='300' transition='scale-transition' type='card'>
        <RestaurantCard :restaurant='restaurant' />
      </v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<style scoped>
.span-filtered-results {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: medium;
  color: #0b3d91;
  margin-left: 4rem;
}
</style>
