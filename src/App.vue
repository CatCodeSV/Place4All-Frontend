<template>
  <v-layout>
    <Header />
    <v-main style="min-height: 300px">
      <div style="min-height: 100vh">
        <RouterView />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<style lang="scss" scoped>
.footer {
  /* position: fixed; */
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
