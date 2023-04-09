<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const profile = ref(false);

function goToRestaurants() {
  router.push('/restaurantes');
}
function goToHome() {
  router.push('/');
}
function openNavProfile() {
  profile.value = !profile.value;
}

const emits = defineEmits(['openDialog']);
</script>
<template>
  <v-app-bar>
    <v-toolbar-nav-icon>
      <v-btn @click="goToHome()">Place4All</v-btn>
    </v-toolbar-nav-icon>
    <v-toolbar-items>
      <v-btn @click="goToRestaurants()" class="ml-2" variant="plain">Restaurantes</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-star-outline</v-icon>
    </v-btn>
    <v-toolbar-items>
      <v-btn icon id="profile-btn" @click="openNavProfile()">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer id="profile-nav-drawer" v-model="profile" temporary location="right" rounded>
    <v-list density="compact" nav>
      <v-list-item>
        <v-btn id="login-btn" @click="emits('openDialog')">Login</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped lang="scss">
#profile-nav-drawer {
  height: 500px;
}
</style>
