<template>
  <v-layout>
    <Header @open-dialog="onOpenDialog" />
    <v-main style="min-height: 300px">
      <div style="min-height: 100vh">
        <RouterView />
        <Login :value="dialog" :on-close="() => (dialog = !dialog)" />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Login from './components/Login.vue';
import { useUser } from './composables/useUser';

const { user } = useUser();
const dialog = ref(false);

function onOpenDialog() {
  if (user.value !== undefined) {
    return;
  }
  console.log('onOpenDialog');
  dialog.value = true;
}
</script>

<style lang="scss" scoped>
.footer {
  /* position: fixed; */
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
