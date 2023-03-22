<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { Address } from '@/models/Address';
import { User } from '@/models/User';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const { user } = useUser();
const isEdit = ref(false);
const tickLabels = ref({
  0: 'Nula',
  1: 'Leve',
  2: 'Moderada',
  3: 'Grave',
  4: 'Muy grave',
});

function goToHome() {
  router.push('/home');
}

function summarizedAddress(address: Address) {
  return `${address.street} ${address.number}, ${address.zipCode}. ${address.city}`;
}
function nameCapitalLetters(user: User) {
  let name = user.name;
  let surname = user.lastName;
  let nameCL = name.slice(0, 1).toUpperCase();
  let surnameCL = surname.slice(0, 1).toUpperCase();

  let result = `${nameCL}${surnameCL}`;
  return result;
}
</script>
<template>
  <v-card-actions class="mx-auto">
    <v-btn color="primary" variant="elevated" @click="goToHome()">
      <v-icon start icon="mdi-arrow-left"></v-icon>
      Volver
    </v-btn>
  </v-card-actions>
  <v-card outlined color="transparent" :elevation="2" class="mx-auto mb-10 bg-white" max-width="90%">
    <div class="block-superior mx-auto my-8 d-flex" id="block-superior">
      <div class="div-personalData" id="rofile">
        <h1 class="my-4 text-center text-h6">{{ user?.name }} {{ user?.lastName }}</h1>
        <div class="d-flex">
          <v-avatar class="mx-4 my-4" color="info" size="x-large">{{ nameCapitalLetters(user!) }}</v-avatar>
          <v-row class="mx-2 my-2">
            <v-col>
              <p class="text"><strong>Email</strong></p>
            </v-col>
            <v-col>
              <p class="text">{{ user?.email }}</p>
            </v-col>
          </v-row>
          <v-btn class="mx-2">Cambiar Contraseña</v-btn>
        </div>
      </div>
      <div class="div-personalData" id="personalData">
        <h1 class="my-4 text-center text-h6">Datos personales</h1>
        <div class="mx-4 my-4">
          <v-row class="mx-2 my-0.5">
            <v-col>
              <p class="text"><strong>Nombre</strong></p>
            </v-col>
            <v-col>
              <p class="text">{{ user?.name }}</p>
            </v-col>
          </v-row>
          <v-row class="mx-2 my-0.5">
            <v-col>
              <p class="text"><strong>Apellido</strong></p>
            </v-col>
            <v-col>
              <p class="text">{{ user?.lastName }}</p>
            </v-col>
          </v-row>
          <v-row class="mx-2 my-0.5">
            <v-col>
              <p class="text"><strong>Dirección</strong></p>
            </v-col>
            <v-col>
              <p class="text">{{ summarizedAddress(user!.address) }}</p>
            </v-col>
          </v-row>
          <v-row class="mx-2 my-0.5">
            <p class="text"><strong>Tipo de discapacidad: </strong></p>
            <v-slider class="mx-2" :ticks="tickLabels" :max="4" step="1" show-ticks="always" tick-size="4"></v-slider>
          </v-row>
        </div>
      </div>
    </div>
    <div class="block-inferior mx-auto my-8 d-flex" id="block-inferior">
      <div id="personalReservations">
        <v-card-text class="my-1 text-center text-h6"> Últimas reservas</v-card-text>
        <div class="reservas">
          <v-card title="Nombre Restaurante" subtitle="Fecha">
            <v-card-actions>
              <v-btn size="x-small" color="secondary">Detalles</v-btn>
            </v-card-actions>
          </v-card>
          <v-card title="Nombre Restaurante" subtitle="Fecha">
            <v-card-actions>
              <v-btn size="x-small" color="secondary">Detalles</v-btn>
            </v-card-actions>
          </v-card>
          <v-card title="Nombre Restaurante" subtitle="Fecha">
            <v-card-actions>
              <v-btn size="x-small" color="secondary">Detalles</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </v-card>
</template>
<style scoped>
#block-superior {
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}
#block-inferior {
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.div-personalData {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
#profile {
  width: 50%;
}
#personalData {
  width: 50%;
}
#personalReservations {
  width: 100%;
}
</style>
