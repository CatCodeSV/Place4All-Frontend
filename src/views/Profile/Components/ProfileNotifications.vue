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
  <v-layout class="titulo-pantalla-usuario" style="height: auto">
    <div class="lista-titulo bg-primary">
      <p class="titulo">Notificaciones</p>
    </div>
    <v-layout class="lista-texto">
      <v-list-item prepend-icon="mdi-email-outline" style="cursor: pointer"
        ><p class="boletin">Estás suscrito al boletín mensual de novedades</p>
      </v-list-item>
    </v-layout>
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
  flex-direction: column;
}
p.boletin {
  font-weight: 400;
  line-height: 2.5rem;
}

@media (max-width: 600px) {
  p.boletin {
    /* width: 100%; */
    padding-right: 10%;
  }
  p.boletin {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
  }
  .lista-titulo {
    padding: 12px;
    padding-left: 50%;
    padding-right: 50%;
    margin-top: 7.5px;
    font-size: unset;
    font-family: 'Roboto';
    text-transform: uppercase;
    display: flex !important;
  }
  .lista-texto {
    margin-top: 30% !important;
    padding: 20px;
  }
}
</style>
