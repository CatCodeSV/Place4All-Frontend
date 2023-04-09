<script setup lang="ts">
import { useUser } from '@/composables/useUser';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const profile = ref(false);
const { user, isLogged, clearStore } = useUser();

function goToRestaurants() {
  router.push('/restaurantes');
}
function goToHome() {
  router.push('/');
}
function openNavProfile() {
  profile.value = !profile.value;
}
function goToUser() {
  router.push('/perfil');
}
function logOut() {
  router.push('/');
  clearStore();
}

const emits = defineEmits(['openDialog']);
</script>
<template>
  <v-app-bar>
    <v-toolbar-nav-icon>
      <v-btn @click="goToHome()">Place4All</v-btn>
    </v-toolbar-nav-icon>
    <v-toolbar-items>
      <v-btn @click="goToRestaurants()" class="ml-2" variant="plain">Restaurantes</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-star-outline</v-icon>
    </v-btn>
    <v-toolbar-items>
      <v-btn icon id="profile-btn" @click="openNavProfile()">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer id="profile-nav-drawer" v-model="profile" temporary location="right" width="224px" height="200px">
    <v-list density="compact" nav>
      <v-list-item>
        <v-btn id="loginSession-btn" @click="emits('openDialog')" variant="text" v-if="!isLogged">Iniciar sesión</v-btn>
        <v-btn id="myProfile-btn" @click="goToUser()" variant="text" v-if="isLogged">Mi perfil</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn id="closeSession-btn" @click="logOut()" variant="text" v-if="isLogged">Cerrar sesión</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped lang="scss">
#profile-nav-drawer {
  width: 224px;
  height: 20%;
}
</style>
