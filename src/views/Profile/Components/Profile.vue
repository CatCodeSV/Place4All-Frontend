<!--Panel de Usuario (Perfil) - Barra izquierda y el espacio vacio a la derecha-->

<script lang="ts" setup>
import { useUser } from '@/composables/useUser';
import { useRouter } from 'vue-router';

const router = useRouter();
const { user } = useUser();

function goToHome() {
  router.push('/');
}
</script>

<template>
  <v-card-actions class="" width="90%">
    <v-btn color="primary" variant="elevated" @click="goToHome()">
      <v-icon start icon="mdi-arrow-left"></v-icon>
      Volver
    </v-btn>
  </v-card-actions>
  <v-card outlined color="transparent" :elevation="2" class="mx-auto mb-10 bg-white" width="70%">
    <div class="banner-user bg-primary p-2 d-flex">
      <p class="ma-2 pa-2">Pefil de usuario</p>
    </div>

    <div class="block-superior mx-auto d-flex" max-width="90%" id="block-superior">
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
          </v-btn>
        </div>
        <v-btn class="miPanelControl-salir" prepend-icon="mdi-arrow-left">
          <p>Salir</p>
        </v-btn>
      </div>
    </div>
    <!-- <div class="block-inferior mx-auto d-flex" id="block-inferior">
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
    </div> -->
  </v-card>
</template>

<style scoped>
.v-card-actions {
  align-items: center;
  display: flex;
  flex: none;
  min-height: 52px;
  padding: 0.5rem;
  /* width: 90%; */
  margin-left: 15%;
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
</style>
