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
<template>
  <div class="d-flex flex-column container">
    <div class="d-flex hero-top">
      <div
        class="justify-center align-center d-flex flex-column bg-primary-300 v-locale--is-ltr rounded-e-xl w-50 my-16 pa-16 flex-grow-1">
        <h2 class="font-weight-bold p-h1 text-h2 text-primary-800">Place4All</h2>
        <h4 class="font-weight-bold p-h4 text-h4 text-primary-800 text-uppercase text-center">un lugar para todos</h4>
      </div>
      <h1 class="font-weight-bold text-center p-h1 text-h1 text-primary w-100 align-self-center">
        Tus lugares de ocio <br />
        <span class="text-action">sin barreras</span>
      </h1>
    </div>
    <div
      class="d-flex flex-column bg-primary v-locale--is-ltr rounded-s-xl w-33 align-self-end pa-8 px-16 w-66 my-16 search-container">
      <h4 class="font-weight-bold p-h4 text-h4 text-white mb-8 mx-auto w-75">
        Encuentra <span class="text-action">locales</span>, <span class="text-action">restaurantes</span> y
        <span class="text-action">mucho más</span>
      </h4>
      <div class="d-flex mx-auto justify-center bg-primary-300 align-center text-white pa-4 w-75 search-bar">
        <v-text-field
          v-model="search"
          class="w-75"
          placeholder="Buscar"
          variant="solo-filled"
          color="primary"
          bg-color="white"
          hide-details
          prepend-inner-icon="mdi-magnify"
          @keyup.enter="buscar" />
        <v-btn class="ml-8" color="action" size="large" @click="buscar"> Buscar</v-btn>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column align-center justify-center mt-16 mb-18 news">
    <h3 class="font-weight-bold p-h3 text-h3 text-primary mb-12 mt-16">Novedades</h3>
    <v-row class="w-100 px-16 mt-8 align-center justify-center align-self-center">
      <v-col class="mx-auto" cols="12" sm="12" lg="4">
        <v-card color="primary-200" class="w-75 mx-auto">
          <v-img
            src="https://media.istockphoto.com/id/1279857028/es/foto/llamada-de-telemedicina-de-amputado-de-veteranos-hispanos-con-m%C3%A9dicos.jpg?s=612x612&w=0&k=20&c=TygTwAobvNq-nQyfHqk0-vDBHBVw1dw0oN-xKJPdnAc=" />
          <v-card-title>
            <h4 class="p-h4 text-h4 text-primary-900">Sercoped</h4>
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 text-primary-900">
              Estamos colaborando con Sercoped para ofrecer un servicio de catering a domicilio para personas con movilidad reducida.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mx-auto" cols="12" sm="12" lg="4">
        <v-card color="primary-200" class="w-75 mx-auto">
          <v-img
            src="https://media.istockphoto.com/id/904079540/es/foto/sonriendo-discapacitado-trabajando-en-su-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=hZJfm4rZjvNaBQh_SmAOrAb0iaQaL_VFghNjoZ8IUx4=" />
          <v-card-title>
            <h4 class="p-h4 text-h4 text-primary-900">Blog</h4>
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 text-primary-900">
              En nuestro blog podrás encontrar información sobre las últimas novedades en accesibilidad. .
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mx-auto" cols="12" sm="12" lg="4">
        <v-card color="primary-200" class="w-75 mx-auto">
          <v-img
            src="https://media.istockphoto.com/id/1478384310/es/foto/taller-de-arte-para-el-cuidado-de-la-salud-de-la-discapacidad-pintura-creativa-sobre-lienzo-y.jpg?s=612x612&w=0&k=20&c=nQTIN9FH-B04ihyfw9nVT_Z2WDhj89xTM_yGtdaxK2s=" />
          <v-card-title>
            <h4 class="p-h4 text-h4 text-primary-900">Talleres</h4>
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 text-primary-900">
              Estamos organizando talleres de pintura para personas con movilidad reducida. Si estás interesado, ponte en contacto con
              nosotros.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.v-locale--is-ltr.rounded-e-xl {
  border-top-right-radius: 100vh !important;
  border-bottom-right-radius: 100vh !important;
}

.v-locale--is-ltr.rounded-s-xl {
  border-top-left-radius: 100vh !important;
  border-bottom-left-radius: 100vh !important;
}

@media (max-width: 600px) {
  .container {
    width: 100% !important;
  }
  .hero-top {
    flex-direction: column !important;
    width: 100% !important;
    height: 35vh !important;
    border-radius: 0 !important;
    & h1 {
      font-size: 2.5rem !important;
      display: none !important;
    }
    & div {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
  }

  .v-locale--is-ltr.rounded-s-xl {
    margin-top: 0 !important;
    border-radius: 0 !important;
    width: 100% !important;
    height: 60vh !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    & h4 {
      padding: 0;
      width: 100% !important;
    }
  }

  .v-locale--is-ltr.rounded-e-xl {
    border-radius: 0 !important;
    width: 100% !important;
  }

  .search-bar {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;

    & .v-text-field {
      width: 100% !important;
    }
    & .v-btn {
      display: none;
    }
  }

  .search-container {
    width: 100% !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding: 1rem !important;
    gap: 3rem;
  }

  .news {
    margin-top: 0 !important;
    & h3 {
      font-size: 2.5rem !important;
    }
    & .v-card {
      width: 100% !important;
    }
  }
}
</style>
