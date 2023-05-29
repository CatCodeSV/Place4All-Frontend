<template>
  <v-layout>
    <Header @open-dialog="onOpenDialog" />
    <v-main id="page-container" class="d-flex w-100 flex-column">
      <div id="main-content">
        <RouterView />
        <Login :value="dialog" :on-close="() => (dialog = !dialog)" />
        <UserMessageUI />
        <router-link to="/pr"></router-link>
      </div>
      <!--  <div class="footer">
        <Footer />
      </div> -->
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import UserMessageUI from '@/components/UserMessageUI.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Login from './components/Login.vue';
import { useUser } from './composables/useUser';

const router = useRouter();
const { user } = useUser();
const dialog = ref(false);

function onOpenDialog() {
  if (user.value !== undefined) {
    router.push('/perfil');
    return;
  }
  console.log('onOpenDialog');
  dialog.value = true;
}
</script>

<style lang="scss" scoped>
#page-container {
  min-height: 100vh;
  position: relative;
}

#main-content {
  padding-bottom: 101px;
}
</style>
