<script setup lang="ts">
import { useFeature } from '@/composables/useFeature';
import { Features } from '@/models/Features';
import { Restaurant } from '@/models/Restaurant';
import { InformationAccuracy } from '@/models/Review';
import { computed, ref } from 'vue';
import { CreateReview } from '@/helpers/getReview';

const { features } = useFeature();
const props = defineProps<{ dialog: boolean; restaurant: Restaurant; onClose: Function }>();
const show = computed(() => {
  return props.dialog;
});
const reviewValue = ref(0);
const title = ref('');
const comments = ref('');
const informationAccuracy = ref();
const moreServices = ref<Features[]>([]);
const loading = ref(false);

async function onSubmit() {
  loading.value = true;
  var review: CreateReview = {
    title: title.value,
    value: reviewValue.value,
    restaurantId: props.restaurant.id!,
    comment: comments.value,
    informationAccuracy: informationAccuracy.value,
    additionalFeatures: moreServices.value,
  };
  loading.value = false;
  emit('onCreate', review);
}

const emit = defineEmits<{ (e: 'onCreate', review: CreateReview): void }>();
</script>
<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card :loading="loading" outlined color="white" :elevation="2" class="mx-auto mb-10 bg-white" max-width="80%">
      <v-card-text class="justify-center">
        <v-row>
          <v-col cols="12">
            <h2 class="align-self-center ml-3 mb-6">Deja tu Review</h2>
            <v-row align="center" class="mx-0 my-4">
              <v-rating v-model="reviewValue" color="amber" density="compact" half-increments hover size="large"></v-rating>

              <div class="text-grey ms-4">{{ reviewValue }}</div>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="title" color="primary" clearable label="Título" variant="outlined" />
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="comments" color="primary" clearable label="Comentarios" variant="outlined" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>¿Qué tan acertada fue la información?</h3>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              clearable
              chips
              validate-on="blur"
              :items="[
                { title: 'Muy acertada', value: InformationAccuracy.VeryGood },
                { title: 'Acertada', value: InformationAccuracy.Good },
                { title: 'Poco acertada', value: InformationAccuracy.Bad },
                { title: 'Nada acertada', value: InformationAccuracy.VeryBad },
              ]"
              v-model="informationAccuracy"
              color="secondary" />
          </v-col>
          <v-col cols="12">
            <h3>¿Hubieron más servicios de los que aparecen en la página?</h3>
          </v-col>
          <v-col cols="12" lg="12" sm="12" md="12">
            <v-autocomplete
              clearable
              chips
              multiple
              return-object
              validate-on="blur"
              :items="features"
              item-title="name"
              v-model="moreServices"
              color="secondary"
              >Nuevo Servicio
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn color="secondary" class="w-80 my-4 mx-3" @click="props.onClose">Cancelar</v-btn>
        <v-btn :loading="loading" color="primary" class="w-80 my-4 mx-3" @click="onSubmit">Dejar Review</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
