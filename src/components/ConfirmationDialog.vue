<script setup lang="ts">
import { Restaurant } from '@/models/Restaurant';
import { User } from '@/models/User';
import { computed } from 'vue';

const props = defineProps<{
  restaurant: Restaurant | User;
  value: boolean;
}>();

const show = computed(() => {
  return props.value;
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <v-dialog v-model="show" class="pa-6" close-on-back persistent width="auto">
    <v-card>
      <v-card-text> ¿Estás seguro de eliminar este restaurante / usuario? </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="warning" block @click="emit('close')"> Cancelar </v-btn>
        <v-btn color="success" block @click="emit('close')"> Aceptar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
