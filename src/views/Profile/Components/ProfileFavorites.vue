<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { Restaurant } from '@/models/Restaurant';
import { useRouter } from 'vue-router';

function favRestaurant(restaurant: Restaurant) {
  return `${restaurant.name}`;
}

const router = useRouter();
const { user } = useUser();

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
  <v-card>
    <v-layout>
      <v-navigation-drawer style="background-color: #eeeeee" floating permanent>
        <v-list color="transparent">
          <v-list-item class="bg-primary" prepend-icon="mdi-vuetify" title="Rol: Usuario"> </v-list-item>
        </v-list>
        <v-list color="transparent">
          <v-list-item
            class="text-primary"
            @click="goToProfileUser()"
            prepend-icon="mdi-account-box"
            title="Datos Usuario"></v-list-item>
          <v-list-item
            style="border-radius: 0 30px 30px 0"
            class="bg-secondary text-Yellow"
            @click="goToProfileFavorites()"
            prepend-icon="mdi-star"
            title="Favoritos"
            disabled></v-list-item>
          <v-list-item class="text-primary" @click="goToProfileReservation()" prepend-icon="mdi-home" title="Reservas"></v-list-item>
          <v-list-item class="text-primary" @click="goToProfilePrivacy()" prepend-icon="mdi-gavel" title="Privacidad"></v-list-item>
          <v-list-item
            class="text-primary"
            @click="goToProfileNotification()"
            prepend-icon="mdi-email-outline"
            title="Notificaciones"></v-list-item>
        </v-list>

        <div class="btn-cerrar-sesion pa-3">
          <v-btn class="button bg-primary" block> Cerrar sesión </v-btn>
        </div>
      </v-navigation-drawer>
      <v-main class="v-main" style="height: 600px">
        <v-layout class="titulo-pantalla-usuario" style="height: auto">
          <div class="lista-titulo bg-primary">
            <p class="titulo">Favoritos</p>
          </div>
          <v-layout class="lista-texto">
            <v-list-item prepend-icon="mdi-star" title="Luagres de ocio favoritos" style="cursor: pointer">{{
              favRestaurant
            }}</v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Luagres de ocio favoritos" style="cursor: pointer"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Luagres de ocio favoritos" style="cursor: pointer"></v-list-item>
          </v-layout>
        </v-layout>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.btn-cerrar-sesion {
  margin-top: 80%;
}
.btn-cerrar-sesion .button {
  border-radius: 30px;
}
.v-layout.titulo-pantalla-usuario {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lista-titulo {
  padding: 12px;
  padding-left: 50%;
  padding-right: 50%;
  margin-top: 7.5px;
  font-size: unset;
  font-family: 'Roboto';
  text-transform: uppercase;
}
.titulo {
  font-size: unset;
}
#block-superior {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1pt;
}
.v-layout.lista-texto {
  margin-top: 10%;
}
.columna-datos {
  border: #ff3333 solid 1pt;
}
v-main.v-main {
  margin: auto;
  flex: 1 0 auto;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  padding-left: var(--v-layout-left);
  padding-right: var(--v-layout-right);
  padding-top: var(--v-layout-top);
  padding-bottom: var(--v-layout-bottom);
}
.v-card.v-theme--customLightTheme.v-card--density-default.v-card--variant-elevated {
  border-radius: 20px;
  max-width: 65% !important;
  margin: auto;
}
.v-layout.titulo-pantalla-usuario.bg-secondary {
  display: flex;
  flex-direction: column;
}
#block-inferior {
  max-width: 100%;
  /* flex-direction: row; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.lista-texto {
  margin-top: 20%;
  padding: 20px;
}
.div-personalData {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 5px;
  border: solid 1pt;
  width: 100%;
}
#personalData {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
#personalReservations {
  width: 100%;
}
#userDetails {
  flex-direction: column;
  align-items: center;
}
.banner-user {
  background-color: 'primary';
}
.column-icons {
  width: 15%;
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.miPanelControl {
  margin-bottom: 10px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  border: solid 1px;
  display: flex;
}
.miPanelControl-salir {
  padding: 10px;
  margin-top: 20px;
  background-color: #ff3333;
  opacity: 70%;
  display: flex;
  color: white;
  margin-top: 75%;
}
.column-datos {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 40px;
  margin-right: 50px;
}
.only-icons {
  display: flex;
  flex-direction: column;
}
.texto-datos {
  width: 70%;
}

.titulo-pantalla-usuario.bg-secondary {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;
}
h2.titulo {
  text-transform: uppercase;
  /* color: white; */
}
.lista-texto {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
