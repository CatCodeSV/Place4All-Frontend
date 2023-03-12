<script setup lang="ts">
import { useFeature } from '@/composables/useFeature';
import { Features } from '@/models/Features';
import { ref } from 'vue';
const { features, setFeatures } = useFeature();
const props = defineProps<{ dialog: boolean }>();
const dialog = props.dialog;
const selectedFeatures = ref<Features[]>([]);
</script>
<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card outlined color="transparent" :elevation="2" class="mx-auto mb-10 bg-white" max-width="80%">
      <v-card-text class="justify-center">
        <v-row>
          <v-col cols="12">
            <h2 class="align-self-center ml-3 mb-6">Deja tu Review</h2>
            <v-row align="center" class="mx-0 my-4">
              <v-rating color="amber" density="compact" half-increments hover size="large"></v-rating>

              <div class="text-grey ms-4">0</div>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-text-field color="primary" clearable label="Título" variant="outlined" />
          </v-col>
          <v-col cols="12">
            <v-textarea color="primary" clearable label="Comentarios" variant="outlined" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3 for="">Qué tan acertada fue la información?</h3>
          </v-col>
          <v-col cols="12">
            <v-rating
              empty-icon="mdi-circle-outline"
              full-icon="mdi-circle"
              half-icon="mdi-circle-half"
              color="primary"
              density="compact"
              half-increments
              hover
              size="large" />
          </v-col>
          <v-col cols="12">
            <h3>Hubieron más servicios de los que aparecen en la página?</h3>
          </v-col>
          <v-col cols="12" lg="4" sm="4" md="4">
            <v-autocomplete
              clearable
              chips
              multiple
              return-object
              validate-on="blur"
              :items="features"
              item-title="name"
              v-model="selectedFeatures"
              color="secondary"
              >Nuevo Servicio</v-autocomplete
            >
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn color="secondary" class="w-80 my-4" @click="">Cancelar</v-btn>
        <v-btn color="primary" class="w-80 my-4" @click="">Dejar Review</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
