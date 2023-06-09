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

function logOut() {
  goToHome();
  clearStore();
}

function goToUser() {
  router.push('/perfil/usuario');
}

function goToAdmin() {
  router.push('/admin');
}

const emits = defineEmits(['openDialog', 'openRegisterDialog']);
</script>
<template>
  <v-app-bar color="primary">
    <v-btn @click="goToHome()" color="primaryYellow">Place4All</v-btn>

    <v-toolbar-items>
      <v-btn @click="goToRestaurants()" class="ml-2" variant="plain" color="primaryYellow">Restaurantes</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon color="primaryYellow">
      <v-icon>mdi-star-outline</v-icon>
    </v-btn>
    <v-toolbar-items>
      <v-btn icon id="profile-btn" @click="openNavProfile()" color="primaryYellow">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer id="profile-nav-drawer" v-model="profile" temporary location="right" width="224px" height="200px">
    <v-list density="compact" nav>
      <v-list-item>
        <v-btn id="loginSession-btn" @click="emits('openDialog')" variant="text" v-if="!isLogged" color="primary"
          >Iniciar sesión
        </v-btn>
      </v-list-item>
      <v-list-item v-if="isLogged">
        <v-btn id="myProfile-btn" @click="goToUser()" variant="text" color="primary">Mi perfil</v-btn>
      </v-list-item>
      <v-list-item v-if="isLogged">
        <v-btn id="myProfile-btn" @click="goToAdmin()" variant="text" color="primary">Panel Admin</v-btn>
      </v-list-item>
      <v-list-item v-if="!isLogged">
        <v-btn id="registerSession-btn" @click="emits('openRegisterDialog')" variant="text"> Registrarse</v-btn>
      </v-list-item>
      <v-list-item v-if="isLogged">
        <v-btn id="closeSession-btn" @click="logOut()" variant="text">Cerrar sesión</v-btn>
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
