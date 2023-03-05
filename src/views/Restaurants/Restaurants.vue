<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loading = ref(false);
const selection = ref(1);
const rating = ref(4.5);

function reserve() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);

  router.push('/restaurantes/restaurant');
}
</script>

<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="secondary" height="4" indeterminate></v-progress-linear>
    </template>

    <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :model-value="rating" color="amber" density="compact" half-increments readonly size="medium"></v-rating>

        <div class="text-grey ms-4">{{ rating }} (413)</div>
      </v-row>

      <div class="mt-4 text-subtitle-1">$ • Italiano, Cafe</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn color="primary" variant="text" @click="reserve()"> Reservar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
