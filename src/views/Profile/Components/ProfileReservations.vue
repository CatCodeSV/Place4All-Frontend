<script lang="ts" setup>
import { useReservation } from '@/composables/useReservation';
import { useUser } from '@/composables/useUser';
import { Reservation } from '@/models/Reservation';
import { Restaurant } from '@/models/Restaurant';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

function resRestaurant(restaurant: Restaurant) {
  return `${restaurant.name}`;
}

onBeforeMount(async () => {
  loading.value = true;
  if (user.value) {
    reservations.value = await getUserReservations();
  }
  loading.value = false;
});

function formatDate(date: Date) {
  return date.toLocaleString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

const router = useRouter();
const loading = ref(false);
const { user } = useUser();
const { getUserReservations } = useReservation();
const reservations = ref<Reservation[]>([]);
</script>

<template>
  <v-layout class="titulo-pantalla-usuario pa-10 pt-0" style="height: auto">
    <div class="lista-titulo bg-primary">
      <p class="titulo">Reservas</p>
    </div>
    <v-row class="w-100 mt-8">
      <v-col cols="12" md="6" sm="12" v-for="(reservation, index) of reservations" :key="index">
        <v-card :loading="loading">
          <v-card-title>
            <h3 class="text-h4">{{ reservation.restaurantName }}</h3>
            <v-card-subtitle
              >Fecha:
              {{ formatDate(reservation.date as Date) }}
            </v-card-subtitle>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-title>Personas: {{ reservation.people }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Observaciones: {{ reservation.specialInstructions }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<style scoped>
.btn-cerrar-sesion {
  margin-top: 80%;
}

h3.text-h4 {
  display: none;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  justify-content: center;
  text-align: center;
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin-top: 10%;
  padding: 20px;
  line-height: 2.5rem !important;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
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

@media (max-width: 600px) {
  .datos-perfil {
    margin-left: 10% !important;
  }

  h3.text-h4 {
    display: none;
    justify-content: center;
  }

  h3.text-h4 {
    display: flex;
    word-break: normal;
    word-wrap: break-word;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    line-height: 1.5rem;
    justify-content: center;
    margin-top: 30%;
  }

  .lista-titulo {
    padding: 12px;
    padding-left: 30%;
    padding-right: 50%;
    margin-top: 7.5px;
    font-size: unset;
    font-family: 'Roboto';
    text-transform: uppercase;
    height: 48px;
    display: flex;
  }
}
</style>
