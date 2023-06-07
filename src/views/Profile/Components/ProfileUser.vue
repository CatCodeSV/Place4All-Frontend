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
  <v-layout class="titulo-pantalla-usuario layout-datos d-flex flex-column" style="height: auto">
    <div class="lista-titulo bg-primary">
      <p class="titulo">Usuario</p>
    </div>

    <div class="datos-perfil d-flex flex-column w-75 pa-3">
      <v-avatar class="avatar mx-4 my-4" color="secondaryYellow" size="x-large">{{ nameCapitalLetters(user) }}</v-avatar>

      <v-card class="card-perfil mx-auto" width="600">
        <template v-slot:title>
          <h4 class="card-titulo my-4 text-h4">Bienvenido</h4>
        </template>

        <v-card-text>
          <div class="lista-texto">
            <div class="user-email">
              <p class="text-subtitle-1"><strong>Usuario: </strong>{{ user?.userName.toUpperCase() || 'Nombre de usuario' }}</p>
              <p class="text-subtitle-1"><strong>Correo electrónico: </strong>{{ user?.email }}</p>
            </div>
            <hr />
            <div class="discapacidad bg-secondaryYellow">
              <p class="text-subtitle-1"><strong>Discapacidad: </strong>{{ user?.hasDisability ? 'Sí' : 'No tiene discapacidad' }}</p>
              <p class="text-subtitle-1" v-if="user?.hasDisability">
                <strong>Tipo de discapacidad: </strong>{{ user?.disabilityType }}
              </p>
              <p class="text-subtitle-1" v-if="user?.hasDisability">
                <strong>Grado de discapacidad: </strong>{{ user?.disabilityDegree }}
              </p>
            </div>
            <hr />
            <div class="nombre-apellido">
              <p class="text-subtitle-1"><strong>Nombre: </strong>{{ user?.name }}</p>
              <p class="text-subtitle-1"><strong>Apellido: </strong>{{ user?.lastName }}</p>
              <p class="text-subtitle-1"><strong>Género:</strong> {{ 'No especificado' }}</p>
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
              <p class="text-subtitle-1"><strong>Dirección: </strong> {{ summarizedAddress(user?.address) }}</p>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-layout>
</template>

<style scoped>
hr {
  border: solid 0px;
}
.datos-perfil {
  display: flex;
  align-items: center;
  width: 100% !important;
}
.user-email {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.lista-texto.discapacidad {
  display: flex;
  justify-content: center;
}
.nombre-apellido {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.card-perfil {
  padding: 10px;
}

@media (max-width: 600px) {
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
  .datos-perfil {
    margin-left: 23% !important;
  }
  .layout-datos {
    margin-left: -20%;
  }
  .lista-texto {
    width: 100%;
    margin-left: -10%;
  }
  .datos-perfil h4 {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: -11%;
    width: 100%;
    font-size: 1.7rem !important;
  }
  .lista-titulo {
    padding: 12px;
    padding-left: 40% !important;
    padding-right: 50%;
    margin-top: 7.5px;
    font-size: unset;
    font-family: 'Roboto';
    text-transform: uppercase;
    height: auto;
    width: 100%;
    display: flex !important;
  }
  .text-subtitle-1 {
    font-size: 0.9rem !important;
    font-weight: normal;
    line-height: 1.5rem;
    letter-spacing: 0.009375em !important;
    font-family: 'Roboto', sans-serif !important;
    text-transform: none !important;
  }
  .datos-perfil {
    display: flex;
    align-items: center;
    width: 75% !important;
  }
  h4.card-titulo {
    display: none !important;
  }
  p.text-subtitle-1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .user-email {
    margin-bottom: 10px;
    align-items: flex-start;
  }
  .nombre-apellido {
    margin-top: 10px;
  }
}

.titulo {
  font-size: unset;
}
.lista-titulo {
  padding: 12px;
  padding-left: 50%;
  padding-right: 50%;
  margin-top: 7.5px;
  font-size: unset;
  font-family: 'Roboto';
  text-transform: uppercase;
  display: flex;
  justify-content: center;
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

.datos-perfil {
  display: flex;
  align-items: center;
}
.datos-perfil h4 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
