<!-- LINKS ANIDADOS -->
<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { Address } from '@/models/Address';
import { User } from '@/models/User';
import { useRouter } from 'vue-router';

const router = useRouter();
const { user, clearStore } = useUser();

function summarizedAddress(address: Address) {
  return `${address.street} ${address.number}, ${address.zipCode}. ${address.city}`;
}

function nameCapitalLetters(user: User) {
  let nameCL = user.name.slice(0, 1).toUpperCase();
  let surnameCL = user.lastName.slice(0, 1).toUpperCase();
  return `${nameCL}${surnameCL}`;
}

function logOut() {
  clearStore();
  router.push('/');
}

function goToHome() {
  router.push('/');
}

function goToProfileReservation() {
  router.push('/perfil/reservas');
}

function goToProfilePrivacy() {
  router.push('/perfil/privacidad');
}

function goToProfileNotification() {
  router.push('/perfil/notificaciones');
}

function goToProfileUser() {
  router.push('/perfil/usuario');
}

function goToProfileFavorites() {
  router.push('/perfil/favoritos');
}
</script>

<template>
  <v-btn style="margin-top: 10px; margin-left: 5px" color="primary" variant="elevated" @click="goToHome()">
    <v-icon start icon="mdi-arrow-left"></v-icon>
    Volver
  </v-btn>
  <div class="d-flex align-center justify-center"></div>
  <v-card class="w-75 mx-auto">
    <v-layout>
      <v-navigation-drawer style="background-color: #eeeeee; width: 19% !important" floating permanent>
        <v-list color="transparent">
          <v-list-item class="bg-primary" prepend-icon="mdi-user-outline" title="Bienvenido" />
        </v-list>
        <v-list color="transparent">
          <v-list-item
            value="personalData"
            active-color="primary"
            class="text-primary"
            @click="goToProfileUser()"
            prepend-icon="mdi-account-box"
            title="Datos Usuario" />
          <v-list-item
            value="favorites"
            active-color="primary"
            class="text-primary"
            @click="goToProfileFavorites()"
            prepend-icon="mdi-star"
            title="Favoritos" />
          <v-list-item
            value="reservation"
            active-color="primary"
            class="text-primary"
            @click="goToProfileReservation()"
            prepend-icon="mdi-home"
            title="Reservas" />
          <v-list-item
            value="notification"
            active-color="primary"
            class="text-primary"
            @click="goToProfileNotification()"
            prepend-icon="mdi-email-outline"
            title="Notificaciones" />
        </v-list>
        <v-spacer />
        <div class="btn-cerrar-sesion pa-3">
          <v-btn @click="logOut" class="button bg-primary" block> Cerrar sesión</v-btn>
        </div>
        <div class="btn-cerrar-sesion-mobile pa-3">
          <v-btn @click="logOut" prepend-icon="mdi-arrow-left" class="button2 bg-primary" style="padding-left: 22px" block></v-btn>
        </div>
      </v-navigation-drawer>
      <v-main style="min-height: 600px">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.btn-cerrar-sesion-mobile.pa-3 {
  display: none;
}
.btn-cerrar-sesion.pa-3 {
  display: flex;
}
.v-list-item-title {
  display: flex;
}
.v-list-item__content {
  display: flex;
}
main.v-main {
  --v-layout-left: 180px !important;
}

@media (max-width: 600px) {
  .btn-cerrar-sesion.pa-3 {
    display: none;
  }
  .btn-cerrar-sesion-mobile.pa-3 {
    display: flex;
  }
  .v-navigation-drawer {
    width: 55px !important;
  }
  main.v-main {
    --v-layout-left: 85px !important;
    --v-layout-left: 50px !important;
  }
}
</style>
