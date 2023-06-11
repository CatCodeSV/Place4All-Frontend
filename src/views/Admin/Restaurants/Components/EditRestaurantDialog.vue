<script lang="ts" setup>
import { useRelatedDialog } from '@/composables/useRelatedDialog';
import { ViewMode } from '@/enums/ViewMode';
import { Restaurant } from '@/models/Restaurant';

const { dialog, relatedInternal, viewModeInternal, closeDialog, v$, readonly, show } = useRelatedDialog<Restaurant>(
  {},
  (source, target) => {
    target.name = source.name;
    target.phoneNumber = source.phoneNumber;
    target.description = source.description;
    target.id = source.id;
  }
);

const emit = defineEmits<{
  (e: 'onAccept', viewMode: ViewMode, restaurant: Restaurant): void;
}>();

defineExpose({ show });
</script>

<template>
  <v-dialog v-model="dialog" max-width="60%" class="pa-6" close-on-back persistent>
    <v-card class="h-100">
      <v-toolbar color="white">
        <div class="d-flex flex-column pa-4">
          <v-toolbar-title>Editar {{ relatedInternal.name }}</v-toolbar-title>
        </div>
      </v-toolbar>
      <v-card-text style="overflow-y: auto">
        <v-container class="h-100">
          <v-row class="w-100">
            <v-col cols="6">
              <v-text-field v-model="relatedInternal.name" label="Nombre" outlined dense class="w-100" />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="relatedInternal.phoneNumber" label="Número de teléfono" outlined dense class="w-100" />
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="relatedInternal.description" label="Descripción" outlined dense class="w-100" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          class="w-10 mr-9"
          @click="
            emit('onAccept', viewModeInternal, relatedInternal);
            closeDialog();
          ">
          Guardar
        </v-btn>
        <v-btn class="w-10 pa-0" color="action" @click="closeDialog">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
