<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { useRouter } from 'vue-router';

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
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" style="padding-top: 50px">
        <v-list color="transparent">
          <v-list-item @click="goToProfileUser()" prepend-icon="mdi-account-box" title="Perfil Usuario"></v-list-item>
          <v-list-item @click="goToProfileFavorites()" prepend-icon="mdi-star" title="Favoritos"></v-list-item>
          <v-list-item @click="goToProfileReservation()" prepend-icon="mdi-vuetify" title="Reservas"></v-list-item>
          <v-list-item @click="goToProfilePrivacy()" prepend-icon="mdi-gavel" title="Privacidad" disabled></v-list-item>
          <v-list-item @click="goToProfileNotification()" prepend-icon="mdi-email-outline" title="Avisos"></v-list-item>
          <v-list-item class="text-secondary" @click="goToHome()" prepend-icon="mdi-arrow-left" title="Inicio"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="btn-cerrar-sesion pa-3">
            <v-btn class="bg-error" block> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 700px">
        <v-layout class="titulo-favortios bg-secondary" style="height: 60px">
          <h2 class="titulo">Privacidad</h2>
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
}
</style>
