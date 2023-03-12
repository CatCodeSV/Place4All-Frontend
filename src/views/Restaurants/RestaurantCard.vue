<script setup lang="ts">
import { useRestaurant } from '@/composables/useRestaurant';
import { Address } from '@/models/Address';
import { Restaurant } from '@/models/Restaurant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { setRestaurant } = useRestaurant();
const router = useRouter();
const loading = ref(false);
const props = defineProps<{
  restaurant: Restaurant;
}>();

function reserve() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
}

function getImageUrl(image: string) {
  return image.replace('@', 'src');
}

function summarizeAdress(address: Address) {
  return `${address.street} ${address.number}, ${address.city}`;
}

async function goToDetail(restaurant: Restaurant) {
  await setRestaurant(restaurant.stringId);
  router.push('/restaurantes/' + restaurant.stringId);
}
</script>

<template>
  <v-card @click="" elevation="4" :loading="loading" class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="secondary" height="4" indeterminate></v-progress-linear>
    </template>

    <v-img @click="goToDetail(restaurant)" cover height="250" :src="getImageUrl(restaurant.image[0])"></v-img>

    <v-card-item @click="goToDetail(restaurant)">
      <v-card-title>{{ props.restaurant.name }}</v-card-title>
    </v-card-item>

    <v-card-text @click="goToDetail(restaurant)" class="v-card-text">
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="props.restaurant.reviews?.reviewsAverage"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="medium"></v-rating>

        <div class="text-grey ms-4">
          {{ props.restaurant.reviews?.reviewsAverage || 0 }}
        </div>
      </v-row>

      <div class="mt-4 text-subtitle-1">{{ summarizeAdress(props.restaurant.address) }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions class="v-card-actions">
      <v-btn prepend-icon="mdi-calendar-clock" color="primary" variant="tonal" rounded="pill" @click="reserve" class="v-btn">
        Reservar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.mx-auto {
  border-radius: 1.5rem;
}
.v-card-text {
  margin-top: 0.5rem;
}
.v-card-actions {
  justify-content: center;
  padding: 0.6rem;
}
.v-card-actions .v-btn {
  padding: 0 1.5rem;
}
</style>