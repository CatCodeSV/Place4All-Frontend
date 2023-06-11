<script setup lang="ts"></script>

<template>
  <v-footer :elevation="2" class="index text-center flex-grow-1 d-flex align-items-center justify-space-between" color="primary">
    <div class="text-white d-flex pa-2 my-2 font-weight-bold text-h5 p-h1 text-p text-primary-800 w-100">
      <p class="mx-10 text-white">©2023 Place4All by CatCode</p>
    </div>
    <div class="link-text-footer w-100 d-flex align-end">
      <a class="text-white w-100 px-8" href="">Cookies</a>
      <a class="text-white w-100 px-8" href="">Aviso legal</a>
      <a class="text-white w-100 px-8" href="">Privacidad</a>
    </div>
  </v-footer>
</template>

<style scoped>
.index {
  max-height: 80px;
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
