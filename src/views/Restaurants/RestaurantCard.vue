<script lang="ts" setup>
import { RestaurantSummarized } from '@/models/RestaurantSummarized';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const props = defineProps<{
  restaurant: RestaurantSummarized;
}>();

function reserve() {
  loading.value = true;
  window.open('https://forms.gle/Mp3PDwL9c6tbWjTq9', '_blank');
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}

function getImageUrl(image: string) {
  return image ? image.replace('@/assets', '') : 'https://picsum.photos/250/250';
}

async function goToDetail(restaurant: RestaurantSummarized) {
  router.push('/restaurantes/' + restaurant.id);
}
</script>

<template>
  <v-card :loading="loading" class="mx-auto my-12" elevation="4" max-width="374" @click="">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="secondary" height="4" indeterminate></v-progress-linear>
    </template>
    <v-img :src="getImageUrl(restaurant.image)" cover height="250" @click="goToDetail(restaurant)"></v-img>

    <v-card-item @click="goToDetail(restaurant)">
      <v-card-title>{{ props.restaurant.name }}</v-card-title>
    </v-card-item>

    <v-card-text class="v-card-text" @click="goToDetail(restaurant)">
      <v-row align="center" class="mx-0">
        <v-rating :model-value="props.restaurant.rating" color="amber" density="compact" half-increments readonly size="medium" />

        <div class="text-grey ms-4">
          {{ props.restaurant.numberOfReviews || 0 }}
        </div>
      </v-row>

      <!-- <div class="mt-4 text-subtitle-1">{{ summarizeAdress(props.restaurant.address) }}</div> -->
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions class="v-card-actions">
      <v-btn class="v-btn" color="primary" prepend-icon="mdi-calendar-clock" rounded="pill" variant="flat" @click="reserve">
        Reservar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
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
