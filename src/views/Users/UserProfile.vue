<script lang="ts" setup></script>
<template>
  <div>
    <v-btn class="ma-2" color="blue-darken-2">
      <v-icon start icon="mdi-arrow-left"></v-icon>
      Volver
    </v-btn>
  </div>
  <v-card-text class="my-4 text-center text-h6"> Perfil de usuario </v-card-text>
  <div class="block-superior mx-auto my-8 d-flex" id="block-superior">
    <div>
      <v-row>
        <v-col cols="12">
          <v-hover v-slot="{ isHovering, props }" disabled>
            <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" height="468px" min-width="360px" v-bind="props">
              <v-card-text class="my-4 text-center text-h6">Nombre Apellido</v-card-text>
              <v-img cover max-height="200" src="https://picsum.photos/id/237/200/300"></v-img>
              <div class="usuario-web ma-3">
                <v-card-text class="text-center text"><strong>Usuario:</strong> MLage</v-card-text>
                <v-card-text class="text-center text"><strong>Email:</strong> lagemarcos@gmail.com</v-card-text>
                <v-card-text class="text-center text"><strong>Contraseña:</strong> test</v-card-text>
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
            <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" height="468px" min-width="360px" v-bind="props">
              <v-card-text class="my-4 text-center text-h6">Datos personales</v-card-text>
              <div class="datos-personales ma-3">
                <v-card-text class="text"><strong>Nombre:</strong> Marcos</v-card-text>
                <v-card-text class="text"><strong>Apellidos:</strong> Lage</v-card-text>
                <v-card-text class="text"><strong>Dirección:</strong> Avenida de los Naranjos 1, Valencia</v-card-text>
                <v-card-text class="text"><strong>Fecha de nacimiento:</strong> 10/10/1998</v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </div>
  <div class="block-inferior mx-auto my-8 d-flex" id="block-superior">
    <div>
      <v-row>
        <v-col cols="12">
          <v-hover v-slot="{ isHovering, props }" disabled>
            <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" height="350" min-width="360px" v-bind="props">
              <v-card-text class="my-4 text-center text-h6">Discapacidad</v-card-text>
              <v-card-text class="text-center text-h7"><strong>Tipo de discapacidad:</strong> Ninguna</v-card-text>
              <v-slider :ticks="tickLabels" :max="3" step="1" show-ticks="always" tick-size="4"> </v-slider>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col cols="12">
          <v-hover v-slot="{ isHovering, props }" disabled>
            <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" height="350" min-width="360px" v-bind="props">
              <v-card-text class="my-4 text-center text-h6"> Últimas reservas</v-card-text>
              <div class="reservas">
                <v-card title="Nombre Restaurante" subtitle="Fecha">
                  <v-card-actions>
                    <v-btn>Detalles</v-btn>
                  </v-card-actions>
                </v-card>
                <v-card title="Nombre Restaurante" subtitle="Fecha">
                  <v-card-actions>
                    <v-btn>Detalles</v-btn>
                  </v-card-actions>
                </v-card>
                <v-card title="Nombre Restaurante" subtitle="Fecha">
                  <v-card-actions>
                    <v-btn>Detalles</v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<style scoped>
#block-superior {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
#block-inferior {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
</style>
