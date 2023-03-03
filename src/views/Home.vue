<script lang="ts" setup>
import { ref } from 'vue';

const searchField = ref('');
function onSearch() {
  console.log(searchField.value);
}
</script>

<template>
  <div class="container" style="background-image: url('~@/assets/home.jpg')">
    <div class="bg-white title">Encuentra tu lugar ideal</div>
    <!--  <v-img class="mx-auto" height="auto" lazy-src="https://picsum.photos/id/11/100/60" max-width="70%" src="@/assets/home.jpg">
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img> -->
    <v-text-field class="w-40" placeholder="¿En qué ciudad estás?" />
  </div>
</template>
<style lang="scss" scoped></style>
