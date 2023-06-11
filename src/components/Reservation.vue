<script setup lang="ts">
import { computed, ref } from 'vue';
import { Features } from '@/models/Features';
import { Restaurant } from '@/models/Restaurant';
import { RestaurantSummarized } from '@/models/RestaurantSummarized';
import { useReservation } from '@/composables/useReservation';
import { CreateReservation } from '@/helpers/getReservation';
import { useUserMessage } from '@/composables/useUserMessage';
import { UserMessageType } from '@/store/userMessage.store';

const { postReservation } = useReservation();
const { storeUserMessage } = useUserMessage();
const props = defineProps<{
  restaurant: Restaurant | RestaurantSummarized;
  value: boolean;
}>();

const show = computed(() => {
  return props.value;
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const date = ref('');
const time = ref('');
const people = ref(0);
const selectedFeatures = ref<Features[]>([]);
const specialInstructions = ref('');

async function reserve() {
  let createReservation: CreateReservation = {
    date: new Date(`${date.value}T${time.value}`),
    people: people.value,
    specialInstructions: specialInstructions.value,
    features: selectedFeatures.value.map(feature => feature.id!),
    restaurantId: props.restaurant.id!,
  };
  const res = await postReservation(createReservation);
  storeUserMessage(UserMessageType.validation, 'Reserva realizada correctamente');
  emit('close');
}
</script>

<template>
  <v-dialog v-model="show" class="pa-6" close-on-back persistent width="1024">
    <v-window class="bg-white rounded pa-6" v-if="restaurant">
      <div class="d-flex w-100">
        <h2 class="text-title text-primary">Reserva en {{ restaurant.name }}</h2>
        <v-spacer />
        <v-btn icon @click="emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-divider class="my-6" />
      <div class="d-flex rounded bg-primary-200">
        <div class="d-flex w-50 flex-column pa-10">
          <v-text-field bg-color="neutral-100" density="compact" label="Fecha" type="date" v-model="date" />
          <v-text-field bg-color="neutral-100" density="compact" label="Hora" type="time" v-model="time" />
          <v-text-field bg-color="neutral-100" density="compact" label="Personas" type="number" v-model="people" />
        </div>
        <div class="d-flex w-50 pa-10">
          <v-textarea
            prepend-inner-icon="mdi-chat-outline"
            bg-color="neutral-100"
            label="Instrucciones especiales"
            v-model="specialInstructions" />
        </div>
      </div>
      <div class="d-flex justify-center align-center w-100 pa-8 flex-column">
        <h2 class="text-title text-primary">Qué servicios vas a utilizar?</h2>
        <div class="d-flex align-self-end w-33 mt-5 px-10">
          <v-select
            :items="restaurant.features"
            item-title="name"
            density="compact"
            v-model="selectedFeatures"
            item-value="id"
            color="primary"
            bg-color="neutral-100"
            no-data-text="No se han encontrado servicios"
            multiple
            return-object
            label="Añadir servicios">
            <template v-slot:selection="{}"></template>
          </v-select>
        </div>
        <div class="d-flex flex-wrap w-100">
          <v-chip
            prepend-icon="mdi-information"
            v-for="(feature, index) of selectedFeatures"
            :key="index"
            class="mx-2 my-2 text-primary"
            color="primary">
            {{ feature.name }}
            <v-tooltip activator="parent" location="top">{{ feature.description }}</v-tooltip>
          </v-chip>
        </div>
      </div>
      <div class="w-100 d-flex">
        <v-btn class="text-primary" size="large" color="action" @click="reserve">Reservar</v-btn>
      </div>
    </v-window>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
