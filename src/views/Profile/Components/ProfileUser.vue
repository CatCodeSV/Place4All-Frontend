<template>
  <v-btn style="margin-top: 10px; margin-left: 5px" color="primary" variant="elevated" @click="goToHome()">
    <v-icon start icon="mdi-arrow-left"></v-icon>
    Volver
  </v-btn>
  <v-card>
    <v-layout>
      <v-navigation-drawer id="style-card" style="background-color: #eeeeee" floating permanent>
        <v-list color="transparent">
          <v-list-item class="bg-primary" prepend-icon="mdi-vuetify" title="Rol: Usuario"> </v-list-item>
        </v-list>
        <v-list color="transparent">
          <v-list-item
            style="border-radius: 0 30px 30px 0"
            class="text-icons bg-secondary text-Yellow"
            @click="goToProfileUser()"
            prepend-icon="mdi-account-box"
            title=""
            disabled
            ><p>Datos Usuario</p></v-list-item
          >
          <v-list-item class="text-icons text-primary" @click="goToProfileFavorites()" prepend-icon="mdi-star" title=""
            ><p>Favoritos</p></v-list-item
          >
          <v-list-item class="text-icons text-primary" @click="goToProfileReservation()" prepend-icon="mdi-home" title=""
            ><p>Reservas</p></v-list-item
          >
          <v-list-item class="text-icons text-primary" @click="goToProfilePrivacy()" prepend-icon="mdi-gavel" title=""
            ><p>Privacidad</p></v-list-item
          >
          <v-list-item class="text-icons text-primary" @click="goToProfileNotification()" prepend-icon="mdi-email-outline" title=""
            ><p>Notificaciones</p></v-list-item
          >
        </v-list>

        <div class="btn-cerrar-sesion pa-3">
          <v-btn class="button bg-primary" block> Cerrar sesión </v-btn>
        </div>
      </v-navigation-drawer>
      <v-main class="v-main" style="height: 600px">
        <v-layout class="titulo-pantalla-usuario" style="height: auto">
          <div class="lista-titulo bg-primary">
            <p class="titulo">Usuario</p>
          </div>
          <v-layout class="lista-texto">
            <div class="image-name">
              <v-avatar class="mx-4 my-4" color="primaryYellow" size="x-large"></v-avatar>
              <div class="mx-4 my-4" color="primaryYellow" size="x-large">
                <p class="text"><strong>Nombre: </strong>{{ nameCapitalLetters }}</p>
              </div>
            </div>

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
          </v-layout>
        </v-layout>
      </v-main>
    </v-layout>
  </v-card>
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
.image-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
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

.text-input {
  padding-bottom: 20px;
  display: flex;
  text-align: center;
  margin-right: 10%;
  margin-left: 10%;
}
.text-input-select {
  display: flex;

  flex-direction: column;
  margin-right: 10%;
  margin-left: 10%;
}

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
  margin-top: 0;
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
/**tamaño de la card */
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

@media (max-width: 500px) {
  .v-card.v-theme--customLightTheme.v-card--density-default.v-card--variant-elevated {
    border-radius: 20px;
    max-width: 100% !important;
    margin: auto;
  }
  v-navigation-drawer__content {
    width: 60px !important;
  }
  .text-icons p {
    display: none;
  }
}

.v-navigation-drawer__content {
  width: 60px !important;
}
v-navigation-drawer__content {
  left: 0px;
  z-index: 904;
  transform: translateX(0%);
  position: absolute;
  background-color: rgb(238, 238, 238);
  height: calc((100% - 0px) - 0px);
  top: 0px;
  bottom: 0px;
  width: 60px;
}
nav#style-card {
  width: 60px !important;
}
</style>
