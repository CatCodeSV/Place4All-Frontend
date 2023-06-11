<script setup lang="ts"></script>

<template>
  <v-footer
    :elevation="2"
    class="index bg-primary-300 text-center d-flex flex-column align-items-center justify-center"
    color="secondary">
    <!--  <div>
      <v-btn v-for="link in links" :key="link.id" class="mx-4" variant="text">{{ link.title }}</v-btn>
    </div>
    <v-divider></v-divider> -->
    <div class="text-footer pa-2 my-2 font-weight-bold p-h1 text-p text-primary-800">
      <p>©2023 Place4All by CatCode.</p>
      <p>Todos los derechos reservados.</p>
    </div>
    <div class="link-text-footer pa-3 p-h1 text-p text-primary-300">
      <a href="">Política de cookies</a>
      <a href="">Aviso legal</a>
      <a href="">Política de privacidad</a>
    </div>
  </v-footer>
</template>

<style scoped>
.index {
  z-index: 9999999;
}
.text-footer {
  color: #0b3d91;
}
.link-text-footer a {
  margin-left: 100px;
  margin-right: 100px;

  color: #051b40;
}
.link-text-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}
@media (max-width: 600px) {
  .link-text-footer a {
    margin-left: 30px;
    margin-right: 30px;
  }
  .link-text-footer {
    display: flex;
    flex-direction: column;
  }
}
</style>
