<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark">
        <v-list color="transparent">
          <v-list-item
            prepend-icon="mdi-vuetify"
            title="Rol: Admin"
            style="background-color: lightseagreen; margin-bottom: 5px"></v-list-item>
        </v-list>
        <v-list color="transparent">
          <v-list-item @click="goToProfileUser()" prepend-icon="mdi-account-box" title="Datos Usuario"></v-list-item>
          <v-list-item @click="goToProfileFavorites()" prepend-icon="mdi-star" title="Favoritos"></v-list-item>
          <v-list-item @click="goToProfileReservation()" prepend-icon="mdi-home" title="Reservas"></v-list-item>
          <v-list-item @click="goToProfilePrivacy()" prepend-icon="mdi-gavel" title="Privacidad"></v-list-item>
          <v-list-item @click="goToProfileNotification()" prepend-icon="mdi-email-outline" title="Notificaciones"></v-list-item>
          <v-list-item class="text-secondary" @click="goToHome()" prepend-icon="mdi-arrow-left" title="Inicio"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="btn-cerrar-sesion pa-3">
            <v-btn class="bg-error" block> Cerrar sesión </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 700px">
        <v-layout class="titulo-pantalla-usuario bg-secondary" style="height: 60px">
          <h2 class="titulo">Administrador</h2>
        </v-layout>

        <card class="list-text">
          <!-- <v-avatar class="mx-4 my-4" color="primaryYellow" size="x-large">{{ nameCapitalLetters(user!) }}</v-avatar> -->
          <h4 class="my-4 text-center text-h6">Nombre {{ user?.name }} Apellido {{ user?.lastName }}</h4>
          <div class="text-input">
            <p class="text"><strong>Nombre: </strong>{{ user?.name }}</p>
            <input type="text" placeholder="nombre usuario" />
          </div>
          <div class="text-input">
            <p class="text"><strong>Apellido: </strong>{{ user?.lastName }}</p>
            <input type="text" placeholder="apellido usuario" />
          </div>
          <div class="text-input">
            <p class="text"><strong>Dirección: </strong>{{ user?.address }}</p>
            <input type="text" placeholder="direccion usuario" />
          </div>
          <div class="text-input-select">
            <p class="text"><strong>Discapacidad: </strong>{{ user?.disabilityDegree }}</p>
            <v-select
              :disabled="true"
              label="Discapacidad"
              :items="['Nula', 'Leve', 'Moderada', 'Grave', 'Muy Grave']"
              variant="underlined" />
          </div>
        </card>
      </v-main>
    </v-layout>
  </v-card>
  <!-- <v-card outlined color="transparent" :elevation="2" class="mx-auto mb-10 bg-white" max-width="90%">
      <div class="block-inferior mx-auto d-flex" id="block-inferior">
        <div id="personalReservations">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <template v-slot:default="{}">
                  <v-row no-gutters>
                    <v-col cols="4" class="d-flex justify-start"> Reservas </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="w-100 bg-white">
                <v-col class="h-100" cols="12" lg="4" md="6" sm="12"> </v-col>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </v-card> -->
</template>

<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { Address } from '@/models/Address';
import { User } from '@/models/User';
import { useRouter } from 'vue-router';

const router = useRouter();
const { user } = useUser();

function summarizedAddress(address: Address) {
  return `${address.street} ${address.number}, ${address.zipCode}. ${address.city}`;
}
function nameCapitalLetters(user: User) {
  let nameCL = user.name.slice(0, 1).toUpperCase();
  let surnameCL = user.lastName.slice(0, 1).toUpperCase();
  return `${nameCL}${surnameCL}`;
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

<style scoped>
#block-superior {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1pt;
}
#block-inferior {
  max-width: 100%;
  /* flex-direction: row; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
.lista-datos-usuario {
  display: flex;
  flex-direction: column;
}
#block-superior {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1pt;
}
#block-inferior {
  max-width: 100%;
  /* flex-direction: row; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
.list-text {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;
  padding: 10px;
}
.list-text p {
  padding: 5px;
}
.text-input {
  padding-bottom: 20px;
  display: flex;
  text-align: center;
}
.text-input.select {
  padding: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
}
</style>
