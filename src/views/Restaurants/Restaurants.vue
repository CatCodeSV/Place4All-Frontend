<script lang="ts" setup>
import { useFeature } from '@/composables/useFeature';
import { useRestaurant } from '@/composables/useRestaurant';
import { Features } from '@/models/Features';
import { onBeforeMount, ref } from 'vue';
import RestaurantCard from './RestaurantCard.vue';
import { useRoute } from 'vue-router';
import Reservation from '@/components/Reservation.vue';
import { RestaurantSummarized } from '@/models/RestaurantSummarized';
import { useUser } from '@/composables/useUser';
import { useUserMessage } from '@/composables/useUserMessage';
import { UserMessageType } from '@/store/userMessage.store';

const { restaurants, setRestaurants, setRestaurantsQuery, setRestaurantsByFeatures } = useRestaurant();
const { features, setFeatures } = useFeature();
const route = useRoute();
const { isLogged } = useUser();
const { storeUserMessage } = useUserMessage();

onBeforeMount(async () => {
  loading.value = true;
  if (features.value.length == 0) {
    await setFeatures();
  }
  mappedFeatures.value = features.value.map((feature: Features) => {
    return {
      value: feature.id,
      title: feature.name,
    };
  });
  if (restaurants.value.length == 0) {
    await setRestaurants();
  }
  restaurantsToShow.value = restaurants.value;
  const query = route.query;
  if (!query.search) {
    loading.value = false;
    return;
  }
  await setRestaurantsQuery(query.search as string);
  restaurantsToShow.value = restaurants.value;
  loading.value = false;
});
const loading = ref(false);
//Para el filtro de features/necesidades
const mappedFeatures = ref();

const selectedFeature = ref();
const restaurantsToShow = ref();
const reservationDialog = ref(false);
const selectedRestaurant = ref();

async function setFiltered() {
  if (selectedFeature.value.length === 0) {
    restaurantsToShow.value = restaurants.value;
    return;
  }
  await setRestaurantsByFeatures(selectedFeature.value);
  restaurantsToShow.value = restaurants.value;
}

function openReservationDialog(restaurant: RestaurantSummarized) {
  selectedRestaurant.value = restaurant;
  reservationDialog.value = true;
}
</script>

<template>
  <div v-if="!loading || mappedFeatures" class="d-flex mt-10">
    <v-row class="px-10">
      <v-col cols="12" lg="2" sm="6" xs="6" id="filters">
        <v-select
          v-model="selectedFeature"
          :items="mappedFeatures"
          bg-color="#93A9CE"
          color="primary"
          chips
          clearable
          multiple
          label="Necesidades"
          rounded-pill
          variant="solo"
          rounded="100"
          @update:model-value="setFiltered" />
      </v-col>
      <v-col cols="12" lg="2" sm="6" xs="6">
        <v-select
          :items="['Orden Ascendente', 'Orden Descendente']"
          bg-color="#93A9CE"
          color="primary"
          clearable
          label="Valoraciones"
          rounded-pill
          variant="solo">
        </v-select>
      </v-col>
    </v-row>
  </div>

  <span class="span-filtered-results mt-6"> {{ restaurantsToShow?.length || 0 }} Resultados </span>
  <v-divider class="my-10" />
  <v-row class="pa-6">
    <v-col v-for="(restaurant, index) in restaurantsToShow" :key="index" cols="12" md="3" sm="6">
      <v-skeleton-loader :loading="loading" class="mx-auto" max-width="300" transition="scale-transition" type="card">
        <RestaurantCard
          :restaurant="restaurant"
          @reservation="
            (restaurantSummarized: RestaurantSummarized) =>
              isLogged
                ? openReservationDialog(restaurantSummarized)
                : storeUserMessage(UserMessageType.info, 'Debes estar loggeado para hacer una reserva.')
          " />
      </v-skeleton-loader>
    </v-col>
  </v-row>
  <Reservation
    @close="reservationDialog = false"
    v-if="reservationDialog"
    :restaurant="selectedRestaurant"
    :value="reservationDialog" />
</template>

<style scoped>
.span-filtered-results {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: medium;
  color: #0b3d91;
  margin-left: 4rem;
}

#filters v-select {
  border-radius: 20px !important;
}
</style>
