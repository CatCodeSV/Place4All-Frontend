<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const search = ref('');

function buscar() {
  loading.value = true;
  router.push({ name: 'Restaurants', query: { search: search.value } });
  loading.value = false;
}
</script>

<!--Pantalla 1920 x 1080-->
<template>
  <v-container>
    <!--CARD HOME-->

    <v-row align="center" align-content="center" justify="center" class="h-100 d-flex my-auto">
      <v-col cols="12" lg="10" sm="12" class="w-100 h-100 pa-10 pb-15">
        <!--Tamaño de la card-->
        <v-card image="/necesidades.jpg" :elevation="5" class="mx-auto pa-10 w-100" color="bg-grey-lighten-4">
          <!--Logotipo Place4All-->
          <div class="logotipo d-flex align-center mx-auto my-10" style="max-width: 700px">
            <v-img class="text-center d-flex" src="@/assets/Place4All-logo-home.png"></v-img>
          </div>
          <!--Texto hover-->
          <v-card-text class="my-4 text-center text-h6 text-white"> Encuentra tu lugar ideal </v-card-text>
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
      </v-col>
    </v-row>
  </v-container>
</template>
