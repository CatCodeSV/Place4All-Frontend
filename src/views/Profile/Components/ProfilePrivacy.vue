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
</script>

<template>
  <v-layout class="titulo-pantalla-usuario" style="height: auto">
    <div class="lista-titulo bg-primary">
      <p class="titulo">Privacidad</p>
    </div>
    <div class="lista-texto">
      <div class="text-input">
        <p class="text"><strong>Nombre: </strong>{{ user?.name }}</p>
        <input type="text" placeholder="nombre usuario" />
      </div>
      <div class="text-input">
        <p class="text"><strong>Apellido: </strong>{{ user?.lastName }}</p>
        <input type="text" placeholder="apellido usuario" />
      </div>
      <div class="text-input">
        <p class="text"><strong>Dirección: </strong> ${{ summarizedAddress }}</p>
        <!--{{ user?.addressId }}-->
        <input type="text" placeholder="" />
      </div>
      <div class="text-input-select">
        <p class="text"><strong>Discapacidad: </strong>{{ user?.disabilityDegree }}</p>
        <v-select
          :disabled="false"
          label="Discapacidad"
          :items="['Nula', 'Leve', 'Moderada', 'Grave', 'Muy Grave']"
          variant="underlined" />
      </div>
    </div>
  </v-layout>
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

.text-input {
  padding-bottom: 20px;
  display: flex;
  text-align: center;
  gap: 10px;
}

.text-input.select {
  padding: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
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
  margin-top: 10%;
  padding: 20px;
  padding-bottom: 10%;
  flex-direction: column;
}

.email {
  margin-bottom: 30px;
}
</style>
