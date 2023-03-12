<script setup lang="ts">
import { ref } from 'vue';
const dialog = ref(false);
</script>
<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <v-card>
      <v-card-title>
        <span class="text-h5">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Cerrar </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Guarfar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
