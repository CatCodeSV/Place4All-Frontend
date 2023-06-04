<script setup lang="ts">
import { useUser } from '@/composables/useUser';
import { computed, ref } from 'vue';

const { authenticate } = useUser();
const visible = ref(false);
//Props for dialog boolean
const props = defineProps<{
  value: boolean;
}>();
const emit = defineEmits<{
  (e: 'onClose'): void;
}>();
const loading = ref(false);
const email = ref('');
const password = ref('');

async function onLogin() {
  loading.value = true;
  await authenticate({ email: email.value, password: password.value });
  loading.value = false;
  emit('onClose');
}
const show = computed(() => {
  return props.value;
});
</script>
<template>
  <v-dialog v-model="show" persistent width="1024">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" min-width="35%" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field v-model="email" density="compact" placeholder="Email" prepend-inner-icon="mdi-email-outline" variant="outlined" />

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Contraseña</div>

      <v-text-field
        v-model="password"
        :loading="loading"
        :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        @keydown.enter="onLogin()" />

      <v-btn :loading="loading" block class="mb-8" color="primary" size="large" variant="flat" @click="onLogin()">
        Iniciar sesión
      </v-btn>

      <v-card-text class="text-center">
        <v-btn variant="text" class="text-blue text-decoration-none" color="primary" @click="emit('onClose')">
          Cancelar <v-icon icon="mdi-chevron-right"></v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
