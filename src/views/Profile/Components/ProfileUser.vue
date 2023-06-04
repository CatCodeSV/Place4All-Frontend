<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { Address } from '@/models/Address';
import { User } from '@/models/User';
import { useRouter } from 'vue-router';

const { clearStore } = useUser();
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

function nameCap(user: User) {
  let nameCL = user.name;
  let surnameCL = user.lastName;
  return `${nameCL}${surnameCL}`;
}

function goToHome() {
  router.push('/');
}
</script>

<template>
  <v-layout class="d-flex flex-column pa-6" style="height: auto">
    <div class="d-flex flex-column w-100">
      <v-avatar class="mx-4 my-4" color="secondaryYellow" size="x-large">{{ nameCapitalLetters(user) }}</v-avatar>
      <div class="my-4 w-100">
        <h4 class="my-4 text-h4">{{ user?.userName.toUpperCase() || 'Nombre de usuario' }}</h4>
      </div>
      <div class="lista-texto">
        <p class="text-subtitle-1"><strong>Nombre: </strong>{{ user?.name }}</p>
        <p class="text-subtitle-1"><strong>Apellido: </strong>{{ user?.lastName }}</p>
        <p class="text-subtitle-1"><strong>Correo electrónico: </strong>{{ user?.email }}</p>
        <p class="text-subtitle-1">
          <strong>Fecha de nacimiento: </strong>
          {{
            user?.birthDate
              ? new Date(user?.birthDate).toLocaleDateString('es', {
                  dateStyle: 'long',
                })
              : 'No especificada'
          }}
        </p>
        <p class="text-subtitle-1"><strong>Género:</strong> {{ 'No especificado' }}</p>
        <p class="text-subtitle-1"><strong>Dirección: </strong> {{ summarizedAddress(user?.address) }}</p>
        <p class="text-subtitle-1"><strong>Discapacidad: </strong>{{ user?.hasDisability ? 'Sí' : 'No tiene discapacidad' }}</p>
        <p class="text-subtitle-1" v-if="user?.hasDisability"><strong>Tipo de discapacidad: </strong>{{ user?.disabilityType }}</p>
        <p class="text-subtitle-1" v-if="user?.hasDisability"><strong>Grado de discapacidad: </strong>{{ user?.disabilityDegree }}</p>
      </div>
    </div>
  </v-layout>
</template>

<style scoped>
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
