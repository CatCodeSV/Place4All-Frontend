<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToRestaurants() {
  router.push('/restaurantes');
}
</script>
<template>
  <v-app-bar>
    <v-toolbar-title
      >Place4All
      <v-btn @click="goToRestaurants()" class="ml-2" variant="plain">Restaurantes</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-star-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-comment-text-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
