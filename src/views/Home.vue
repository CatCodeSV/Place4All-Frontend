<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const search = ref('');

function buscar() {
  loading.value = true;
  console.log(search.value);
  router.push({ name: 'Restaurants', query: { search: search.value } });
  loading.value = false;
}
</script>

<!--Pantalla 1920 x 1080-->
<template>
  <div class="container" style="background-image: url('@/assets/home.jpg')">
    <div class="d-flex justify-space-around align-center"></div>
    <!--imagen principal-->
    <v-img class="img-home mx-auto" max-width="100%" src="@/assets/necesidades.jpg" alt="imagen-home"></v-img>

    <!--CARD HOME-->
    <v-row align="center" justify="center">
      <v-col cols="12" class="mx-auto" style="position: absolute; height: 100%; width: 60%">
        <v-hover v-slot="{ isHovering, props }" disabled>
          <!--Tamaño de la card-->
          <v-card :elevation="isHovering ? 12 : 5" class="mx-auto" width="80%" height="35%" v-bind="props" color="bg-grey-lighten-4">
            <!--Logotipo Place4All-->
            <div class="logotipo d-flex align-center mx-auto" style="max-width: 350px; margin-bottom: 20px; margin-top: 20px">
              <v-img class="text-center d-flex" src="@/assets/WebLogo.png"></v-img>
            </div>
            <!--Texto hover-->
            <v-card-text class="my-4 text-center text-h6" style="margin-bottom: 0px !important">
              Encuentra tu lugar ideal
            </v-card-text>
            <!--Buscador-->
            <v-card class="mx-auto" color="white" max-width="70%">
              <v-card-text>
                <v-text-field
                  :loading="loading"
                  density="compact"
                  variant="plain"
                  label="Busca tu lugar ideal"
                  append-inner-icon="mdi-magnify"
                  hide-details
                  v-model="search"
                  v-bind:on-click:append-inner="buscar"
                  @keydown.enter="buscar">
                </v-text-field>
              </v-card-text>
            </v-card>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped></style>
