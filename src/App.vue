<template>
  <v-layout>
    <Header />
    <v-main style="min-height: 300px">
      <RouterView />
      <div class="footer">
        <Footer />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Restaurant from './views/Restaurants/Restaurant/Restaurant.vue';
import Home from './views/Home.vue';
</script>

<style lang="scss" scoped>
.footer {
  /* position: fixed; */
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
