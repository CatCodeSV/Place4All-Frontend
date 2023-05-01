<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
  {
    id: 1,
    title: 'Nuestra empresa',
  },
  {
    id: 2,
    title: 'Contacta',
  },
  {
    id: 3,
    title: 'Politica de privacidad',
  },
]);
</script>

<template>
  <v-footer :elevation="2" class="index bg-surface text-center d-flex flex-column align-items-center justify-center" color="secondary">
    <!--  <div>
      <v-btn v-for="link in links" :key="link.id" class="mx-4" variant="text">{{ link.title }}</v-btn>
    </div>
    <v-divider></v-divider> -->
    <div class="pa-4" color="primary">Todos los derechos reservados a Place4All, una compañía de CatCode.</div>
  </v-footer>
</template>

<style scoped>
.index {
  z-index: 9999999;
}
.pa-4{
  color: #0B3D91;
}
</style>
