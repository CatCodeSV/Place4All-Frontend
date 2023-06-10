<template>
  <v-layout>
    <Header @open-dialog="onOpenDialog" @open-register-dialog="onOpenRegisterDialog" />
    <ConfirmationDialog ref="confirmationDialog" />
    <v-main id="page-container" class="d-flex w-100 flex-column">
      <div id="main-content">
        <RouterView />
        <Login :value="loginDialog" @on-close="() => (loginDialog = !loginDialog)" />
        <Register :value="registerDialog" @on-close="() => (registerDialog = !registerDialog)" />
        <UserMessageUI />
      </div>
      <!--  <div class="footer">
        <Footer />
      </div> -->
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Login from './components/Login.vue';
import { useUser } from './composables/useUser';
import UserMessageUI from '@/components/UserMessageUI.vue';
import Register from '@/components/Register.vue';
import ConfirmationDialog from '@/components/ConfirmationDialog.vue';
import { useConfirmationDialog } from '@/composables/useConfirmationDialog';

const { setConfirmationDialog } = useConfirmationDialog();
const router = useRouter();
const { user } = useUser();
const loginDialog = ref(false);
const registerDialog = ref(false);
const confirmationDialog = ref<InstanceType<typeof ConfirmationDialog> | null>();

onMounted(() => {
  setConfirmationDialog(confirmationDialog?.value);
});

function onOpenDialog() {
  if (user.value !== undefined) {
    router.push('/perfil');
    return;
  }
  loginDialog.value = true;
}

function onOpenRegisterDialog() {
  registerDialog.value = true;
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
