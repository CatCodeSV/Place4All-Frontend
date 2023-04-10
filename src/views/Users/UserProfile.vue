<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { Address } from '@/models/Address';
import { User } from '@/models/User';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const { user, clearStore } = useUser();

function goToHome() {
  router.push('/');
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
const reservationsDialog = ref(false);
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
      <div class="div-personalData">
        <h1 class="my-4 text-center text-h6">{{ user?.name }} {{ user?.lastName }}</h1>
        <div class="d-flex" id="userDetails">
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
            <v-col>
              <p class="text"><strong>Tipo de discapacidad: </strong></p>
            </v-col>
            <v-col>
              <v-select
                :disabled="true"
                label="Discapacidad"
                :items="['Nula', 'Leve', 'Moderada', 'Grave', 'Muy Grave']"
                variant="underlined" />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
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
#personalData {
  width: 50%;
}
#personalReservations {
  width: 100%;
}
#userDetails {
  flex-direction: column;
  align-items: center;
}
</style>
