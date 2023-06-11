<script setup lang="ts"></script>

<template>
  <v-footer :elevation="2" class="index text-center d-flex flex-column align-items-center justify-center" color="primary">
    <div class="mt-2 text-footer text-white pa-2 my-2 font-weight-bold p-h1 text-p text-primary-800">
      <p class="text-white">©2023 Place4All by CatCode.</p>
    </div>
    <div class="link-text-footer text-primary-300 mb-4">
      <a class="text-white mx-4" href="">Cookies</a>
      <a class="text-white mx-4" href="">Aviso legal</a>
      <a class="text-white mx-4" href="">Privacidad</a>
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
