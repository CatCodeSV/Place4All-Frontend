<!-- PERFIL OLD -->
<template>
  <v-card-actions class="mx-auto">
    <v-btn color="primary" variant="elevated" @click="goToHome()">
      <v-icon start icon="mdi-arrow-left"></v-icon>
      Volver
    </v-btn>
  </v-card-actions>
  <v-card outlined color="transparent" :elevation="2" class="mx-auto mb-10 bg-white" max-width="90%">
    <div class="banner-user bg-primary p-2 d-flex">
      <p class="ma-2 pa-2">Pefil de usuario</p>
    </div>

    <div class="block-superior mx-auto d-flex" id="block-superior">
      <div class="column-icons">
        <div class="only-icons">
          <v-btn class="miPanelControl" prepend-icon="mdi-lock" stacked>
            <p>Datos personales</p>
          </v-btn>
          <v-btn class="miPanelControl" prepend-icon="mdi-star" stacked>
            <p>Favoritos</p>
          </v-btn>
          <v-btn class="miPanelControl" prepend-icon="mdi-home" stacked>
            <p>Reservas</p>
          </v-btn>

          <v-btn class="miPanelControl" prepend-icon="mdi-lock" stacked>
            <p>Contraseña</p>
          </v-btn>
          <v-btn class="miPanelControl" prepend-icon="mdi-vuetify" stacked>
            <p>Avisos</p>
            <!--Pop-up-->
            <!-- <v-dialog v-model="dialog" width="500">
              <v-card>
                <v-card-title>Este es el titulo</v-card-title>
                <v-card-text
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptas dolor quis vitae sunt ipsam amet deserunt
                  praesentium?</v-card-text
                >
                <v-card-actions>
                  <v-btn flat @click="dialog = true">Cerrar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog> -->
          </v-btn>
        </div>
        <v-btn class="miPanelControl-salir" prepend-icon="mdi-arrow-left"> Salir </v-btn>
      </div>
      <div class="column-datos">
        <div class="div-personalData">
          <div class="d-flex" id="userDetails">
            <v-avatar class="mx-4 my-4" color="primaryYellow" size="x-large"><!-- {{ nameCapitalLetters(user!) }} --></v-avatar>
            <h1 class="my-4 text-center text-h6">{{ user?.name }} {{ user?.lastName }}</h1>
            <v-row class="my-2">
              <v-col>
                <p class="text"><strong>Email</strong></p>
              </v-col>
              <v-col>
                <p class="text">{{ user?.email }}</p>
              </v-col>
            </v-row>
            <v-btn class="mx-2 d-none">Cambiar Contraseña</v-btn>
          </div>
        </div>
        <hr class="d-none" />

        <div class="div-personalData" id="personalData">
          <h1 class="my-4 text-center text-h6">Datos personales</h1>
          <div class="texto-datos mx-4 my-4">
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
                <!-- <p class="text">{{ summarizedAddress(user!.address) }}</p> -->
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

<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { Address } from '@/models/Address';
import { User } from '@/models/User';
import { useRouter } from 'vue-router';

const router = useRouter();
const { user } = useUser();

function goToHome() {
  router.push('/');
}

function summarizedAddress(address: Address) {
  return `${address.street} ${address.number}, ${address.zipCode}. ${address.city}`;
}
function nameCapitalLetters(user: User) {
  let nameCL = user.name.slice(0, 1).toUpperCase();
  let surnameCL = user.lastName.slice(0, 1).toUpperCase();
  return `${nameCL}${surnameCL}`;
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
</style>
