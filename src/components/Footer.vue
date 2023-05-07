<script setup lang="ts"></script>

<template>
  <v-footer :elevation="2" class="index bg-surface text-center d-flex flex-column align-items-center justify-center" color="secondary">
    <!--  <div>
      <v-btn v-for="link in links" :key="link.id" class="mx-4" variant="text">{{ link.title }}</v-btn>
    </div>
    <v-divider></v-divider> -->
    <div class="text-footer pa-4" color="primary">Todos los derechos reservados a Place4All, una compañía de CatCode.</div>
  </v-footer>
</template>

<style scoped>
.index {
  z-index: 9999999;
}
.text-footer {
  color: #0b3d91;
}
</style>
