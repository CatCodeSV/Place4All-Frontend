<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToRestaurants() {
  router.push('/restaurantes');
}
/**Detalles de cada restaurante */
function reserve() {
  router.push('/restaurantes/restaurant');
}
</script>
<template>
  <v-app-bar>
    <v-toolbar-title
      >Place4All
      <v-btn @click="goToRestaurants()" class="ml-2" variant="plain">Restaurantes</v-btn>
      <!--Entramos en la pantalla detalles desde el boton reservar de cada restaurante-->
      <v-btn @click="reserve()" class="ml-2" variant="plain">Restaurant</v-btn>
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
