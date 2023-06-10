<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const rail = ref(true);
const drawer = ref(true);

function goToAndUnrail(goTo: Function) {
  rail.value = !rail.value;
  setTimeout(() => {
    goTo();
  }, 100);
}

function goToRestaurantAdmin() {
  router.push('/admin/restaurantes');
}

function goToUsersAdmin() {
  router.push('/admin/usuarios');
}

function goToFeaturesAdmin() {
  router.push('/admin/servicios');
}
</script>

<template>
  <div class="d-flex w-100 align-center pa-12 justify-center">
    <v-card class="mx-auto" width="80%">
      <v-layout>
        <v-app-bar app color="primary-200" dark class="elevation-0">
          <v-toolbar-title>Panel de administración</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer permanent v-model="drawer" :rail="rail" @click="rail = false">
          <template v-slot:append>
            <v-btn variant="text" :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'" @click.stop="rail = !rail"></v-btn>
          </template>
          <v-list color="transparent">
            <v-list-item
              value="favorites"
              active-color="primary"
              class="text-primary"
              @click="goToAndUnrail(() => goToRestaurantAdmin())"
              prepend-icon="mdi-silverware"
              title="Restaurantes" />
            <v-list-item
              value="reservation"
              active-color="primary"
              class="text-primary"
              @click="goToAndUnrail(() => goToUsersAdmin())"
              prepend-icon="mdi-account-group"
              title="Usuarios" />
            <v-list-item
              value="notification"
              active-color="primary"
              class="text-primary"
              @click="goToAndUnrail(() => goToFeaturesAdmin())"
              prepend-icon="mdi-filter-menu"
              title="Servicios" />
          </v-list>
          <v-spacer />
        </v-navigation-drawer>
        <v-main class="pa-16" style="min-height: 600px">
          <router-view />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style scoped></style>
