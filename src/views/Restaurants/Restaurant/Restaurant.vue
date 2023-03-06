<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const selection = ref(1.0);
const rating = ref(5.0);

function goToListRestaurants() {
  router.push('/restaurantes');
}
/* export default {
    data: () => ({ rating: 4 }),
  } */
</script>

<template>
  <!--Boton de volver a la lista-->
  <v-card-actions>
    <v-btn color="prisecondarymary" variant="elevated" @click="goToListRestaurants()">
      <v-icon start icon="mdi-arrow-left"></v-icon>
      Volver
    </v-btn>
  </v-card-actions>
  <!--Detalles de restaurante-->
  <v-row class="d-flex justify-center">
    <v-col cols="12">
      <v-hover v-slot="{ isHovering, props }" disabled>
        <v-card :elevation="isHovering ? 12 : 5" class="mx-auto" height="700" max-width="80%" v-bind="props">
          <!--CARD: Detalles Restaurante-->
          <v-card
            ><!--imagenes-->
            <div class="d-flex flex-colum">
              <v-img cover height="250" width="30%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
              <v-img cover height="250" width="30%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
              <v-img cover height="250" width="30%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            </div>
            <div class="d-flex flex-colum">
              <!--columna: servicios | columna: informacion-->
              <v-col cols="4" class="">
                <v-card-text class="my-4 text"> Telefono</v-card-text>
                <v-card-text class="my-4 text"> Ubicacion</v-card-text>
              </v-col>
              <v-col cols="8">
                <v-card-text class="my-4 text"> Descripcion</v-card-text>
                <v-card-text class="my-4 text"> Servicios</v-card-text>
              </v-col>
            </div>
          </v-card>

          <!--CARD: Comentarios-->
          <div class="d-flex flex-colum">
            <v-card class="mx-auto my-5" color="white" elevation="30" max-width="300" height="auto">
              <!--comentario 1-->
              <div class="d-flex flex-column">
                <v-card-title class="flex-grow-1 flex-column align-start">
                  <div class="text-h6 font-weight-thin">Usuario</div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque odit amet vitae labore saepe consectetur sequi
                  assumenda.
                </v-card-text>
                <v-rating v-model="rating" item-aria-label="custom icon label text {0} of {1}"></v-rating>
              </div>
            </v-card>
            <v-card class="mx-auto my-5" color="white" elevation="30" max-width="300" height="auto">
              <!--comentario 1-->
              <div class="d-flex flex-column">
                <v-card-title class="flex-grow-1 flex-column align-start">
                  <div class="text-h6 font-weight-thin">Usuario</div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque odit amet vitae labore saepe consectetur sequi
                  assumenda.
                </v-card-text>
                <v-rating v-model="rating" item-aria-label="custom icon label text {0} of {1}"></v-rating>
              </div>
            </v-card>
            <v-card class="mx-auto my-5" color="white" elevation="30" max-width="300" height="auto">
              <!--comentario 1-->
              <div class="d-flex flex-column">
                <v-card-title class="flex-grow-1 flex-column align-start">
                  <div class="text-h6 font-weight-thin">Usuario</div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque odit amet vitae labore saepe consectetur sequi
                  assumenda.
                </v-card-text>
                <v-rating v-model="rating" item-aria-label="custom icon label text {0} of {1}"></v-rating>
              </div>
            </v-card>
            <v-card class="mx-auto my-5" color="white" elevation="30" max-width="300" height="auto">
              <!--comentario 1-->
              <div class="d-flex flex-column">
                <v-card-title class="flex-grow-1 flex-column align-start">
                  <div class="text-h6 font-weight-thin">Usuario</div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque odit amet vitae labore saepe consectetur sequi
                  assumenda.
                </v-card-text>
                <v-rating v-model="rating" item-aria-label="custom icon label text {0} of {1}"></v-rating>
              </div>
            </v-card>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<style scoped></style>