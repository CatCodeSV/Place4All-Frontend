<script lang="ts" setup>
import { text } from 'stream/consumers';
import { ref } from 'vue';

/* const searchField = ref('');
function onSearch() {
  console.log(searchField.value);
} */

/**Funcion para buscar lugares */
const loading = ref(false);

function buscar() {
  loading.value = true;
  //router.push

  setTimeout(() => {
    loading.value = false;
  }, 2000);
}

/*  export default {
    data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }  */
</script>


<!--Pantalla 1920 x 1080-->
<template>
  <div class="container" style="background-image: url('~@/assets/home.jpg')">
    <!-- <div class="bg-white title">Encuentra tu lugar ideal</div> -->
    <div class="d-flex justify-space-around align-center bg-grey-lighten-4"></div>
    <!--imagen principal-->
    <v-img class="img-home mx-auto" max-width="80%" src="@/assets/home-recorte.jpg"></v-img>
    <!-- <v-img class="img-home mx-auto" max-width="100%" src="@/assets/desk-full.jpg"></v-img> -->
    <v-col style="position: " cols="12"
      ><!--No encuentro como poner la posicion en vue-->
      <!--CARD HOME-->
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" style="position: absolute; max-width: 50%">
          <v-hover v-slot="{ isHovering, props }" disabled>
            <!--Tamaño de la card-->
            <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" max-width="80%" height="350px" v-bind="props" color="white">
              <!--Logotipo Place4All-->
              <div class="logotipo d-flex align-center mx-auto" style="max-width: 350px; margin-bottom: 20px; margin-top: 20px">
                <v-img class="text-center d-flex" src="@/assets/WebLogo.png"></v-img>
              </div>
              <!--Texto hover-->
              <v-card-text class="my-4 text-center text-h6" style="margin-bottom: 0px !important">
                Encuentra tu lugar ideal
              </v-card-text>
              <!--Buscador-->
              <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
                <v-card-text>
                  <v-text-field
                    :loading="loading"
                    density="compact"
                    variant="plain"
                    label="Busca tu lugar ideal"
                    append-inner-icon="mdi-magnify"
                    hide-details
                    @click:append-inner="buscar"></v-text-field>
                </v-card-text>
              </v-card>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>

    <!--  <v-text-field class="w-40" placeholder="¿En qué ciudad estás?" /> -->
  </div>
</template>
<style lang="scss" scoped></style>
