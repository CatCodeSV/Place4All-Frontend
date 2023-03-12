<script setup lang="ts">
import { computed, ref } from 'vue';

const visible = ref(false);
//Props for dialog boolean
const props = defineProps<{
  value: boolean;
  onClose: Function;
}>();

function onLogin() {}
const show = computed(() => {
  return props.value;
});
</script>
<template>
  <v-dialog v-model="show" persistent width="1024">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" min-width="35%" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field density="compact" placeholder="Email" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Contraseña</div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"></v-text-field>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="onLogin()"> Iniciar sesión </v-btn>

      <v-card-text class="text-center">
        <v-btn variant="text" class="text-blue text-decoration-none" @click="onClose()">
          Cancelar <v-icon icon="mdi-chevron-right"></v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
