<script setup lang="ts">
import { ref } from 'vue';

let onConfirmInternal: () => Promise<void> | void = () => Promise.resolve<void>(undefined);
let dialog = ref(false);
let messageInternal = ref<string>();
let elementsToIncludeInternal = ref<string[]>([]);

function show(message: string, onConfirm: () => Promise<void> | void, elementsToInclude?: string[]) {
  messageInternal.value = message;
  elementsToIncludeInternal.value = elementsToInclude ?? [];
  onConfirmInternal = onConfirm;
  dialog.value = true;
}

async function onConfirmAction() {
  dialog.value = false;
  await onConfirmInternal();
}

defineExpose({ show });
</script>
<template>
  <v-dialog v-model="dialog" :max-width="'500px'">
    <v-card>
      <v-card-text class="d-flex justify-center align-center flex-column">
        {{ messageInternal }}
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <div class="d-flex align-center pa-0">
          <div class="mr-9">
            <v-btn color="warning" @click="() => (dialog = false)"> Cancelar</v-btn>
          </div>
          <div class="d-flex align-center pa-0">
            <v-btn color="success" @click="onConfirmAction"> Aceptar</v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
