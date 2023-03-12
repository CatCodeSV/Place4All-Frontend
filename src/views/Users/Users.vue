<script lang="ts" setup>
import router from '@/router';
</script>
<template>
  <div></div>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-hover v-slot="{ isHovering, props }" disabled>
        <v-card :elevation="isHovering ? 12 : 2" class="mx-auto my-10" height="auto" max-width="70%" v-bind="props">
          <div>
            <v-btn class="ma-2" color="blue-darken-2">
              <v-icon start icon="mdi-arrow-left"></v-icon>
              Volver
            </v-btn>
          </div>
          <v-card-text class="my-4 text-center text-h6"> Perfil de usuario </v-card-text>
          <div class="block-superior mx-auto d-flex justify-space-around">
            <div>
              <v-row>
                <v-col cols="12">
                  <v-hover v-slot="{ isHovering, props }" disabled>
                    <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" height="350" width="500px" v-bind="props">
                      <v-card-text class="my-4 text-center text-h6"> Usuario web </v-card-text>
                      <img class="d-flex align-center" src="" alt="imagen" />
                      <div class="usuario-web ma-3">
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Usuario web" rows="1"></v-textarea>
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Email web" rows="1"></v-textarea>
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Password web" rows="1"></v-textarea>
                      </div>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </div>
            <div>
              <v-row>
                <v-col cols="12">
                  <v-hover v-slot="{ isHovering, props }" disabled>
                    <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" height="auto" width="600px" v-bind="props">
                      <v-card-text class="my-4 text-center text-h6"> Datos personales</v-card-text>
                      <div class="datos-personales ma-3">
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Nombre" rows="1"></v-textarea>
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Apellidos" rows="1"></v-textarea>
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Dirección" rows="1"></v-textarea>
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Fecha nacimiento" rows="1"></v-textarea>
                      </div>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="block-inferior mx-auto my-8 d-flex justify-space-around">
            <div>
              <v-row>
                <v-col cols="12">
                  <v-hover v-slot="{ isHovering, props }" disabled>
                    <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" height="350" width="700px" v-bind="props">
                      <v-card-text class="my-4 text-center text-h6"> Reservas pasadas</v-card-text>
                      <div class="datos-personales">
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Nombre" rows="1"></v-textarea>
                        <v-textarea id="" prepend-inner-icon="mdi-comment" class="mx-2" label="Apellidos" rows="1"></v-textarea>
                        <v-textarea prepend-inner-icon="mdi-comment" class="mx-2" label="Dirección" rows="1"></v-textarea>
                      </div>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </div>
          </div> </v-card></v-hover></v-col
  ></v-row>
</template>


<style scoped></style>
