<script lang="ts" setup>
import Reservation from '@/components/Reservation.vue';
import { useFeature } from '@/composables/useFeature';
import { useRestaurant } from '@/composables/useRestaurant';
import { useReview } from '@/composables/useReview';
import { useUser } from '@/composables/useUser';
import { CreateReview } from '@/helpers/getReview';
import { Address } from '@/models/Address';
import { Features } from '@/models/Features';
import { Restaurant } from '@/models/Restaurant';
import { InformationAccuracy, Review } from '@/models/Review';
import { onBeforeMount, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddReviewDialog from './Review/AddReviewDialog.vue';

const { restaurant, addFeatures, setRestaurant, clearRestaurant } = useRestaurant();
const { isLogged, isAdmin } = useUser();
const { postReview } = useReview();
const { features, setFeatures } = useFeature();
const router = useRouter();
const route = useRoute();
const reviews = ref<Review[]>();
onBeforeMount(async () => {
  loading.value = true;
  const restaurantId = route.params.id;
  if (restaurant.value === undefined) await setRestaurant(restaurantId[0]);
  if (features.value.length < 1) await setFeatures();
  loading.value = false;
});

onUnmounted(() => {
  clearRestaurant();
});

function goToListRestaurants() {
  router.push('/restaurantes');
}

const loading = ref(false);
const selectedFeatures = ref<Features[]>([]);
const isEdit = ref(false);
const reservationDialog = ref(false);

function summarizedAddress(address: Address) {
  return `${address.street} ${address.number}, ${address.zipCode}. ${address.city}`;
}

function getImageUrl(image: string) {
  return image ? image.replace('@/assets', '') : '';
}

async function addFeature() {
  await addFeatures(restaurant.value!, selectedFeatures.value);
}

function getInformationAccuracy(data: InformationAccuracy) {
  if (data === InformationAccuracy.Bad) return 'Mala';
  if (data === InformationAccuracy.Good) return 'Buena';
  if (data === InformationAccuracy.VeryGood) return 'Muy Buena';
  if (data === InformationAccuracy.VeryBad) return 'Muy Mala';
}

async function handleCreateReview(review: CreateReview) {
  const res = await postReview(review);
  if (res) {
    reviews.value?.push(res);
    reviewsDialog.value = false;
  }
}

const reviewsDialog = ref(false);
const windowWidth = ref(window.innerWidth);
</script>

<template>
  <!--Botón de volver a la lista-->
  <v-card-actions v-if="!loading" class="mx-auto">
    <v-btn color="textGrey" variant="tonal" @click="goToListRestaurants()">
      <v-icon icon="mdi-arrow-left" start></v-icon>
      Volver
    </v-btn>
  </v-card-actions>
  <v-card
    v-if="restaurant"
    :elevation="2"
    :loading="loading"
    class="mx-auto mb-10 bg-white"
    color="transparent"
    max-width="80%"
    outlined>
    <v-card>
      <div class="d-flex px-6 py-2 w-100 bg-white flex-wrap">
        <h2 class="align-self-center">{{ restaurant!.name }} |</h2>
        <v-rating
          :model-value="restaurant?.rating || 0"
          class="ml-2 align-self-center"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="medium" />
        <v-spacer />
        <v-btn v-if="isAdmin" class="w-80 my-3 mr-4" color="secondary" icon="mdi-pencil" @click="isEdit = !isEdit" />
        <v-btn class="w-80 my-4" color="primary" prepend-icon="mdi-calendar-clock" rounded="pill" @click="reservationDialog = true">
          Reservar
        </v-btn>
      </div>
      <div class="d-flex px-6 py-2 w-100 bg-white flex-wrap justify-content-center">
        <div class="w-75 bg-white pa-4">
          <v-carousel show-arrows="hover" hide-delimiters progress="secondary">
            <v-carousel-item
              v-for="(image, index) of restaurant.images"
              v-bind:key="index"
              :src="getImageUrl(image.link)"
              cover
              max-height="420"></v-carousel-item>
          </v-carousel>
        </div>
        <div v-if="windowWidth > 1200" class="w-60 bg-white pa-4">
          <div v-if="isEdit" class="d-flex align-items-center justify-space-between">
            <v-autocomplete
              v-model="selectedFeatures"
              :items="features"
              chips
              clearable
              color="secondary"
              item-title="name"
              multiple
              return-object
              validate-on="blur"
              >Nuevo Servicio
            </v-autocomplete>
            <v-btn class="w-80 ml-4" color="secondary" icon="mdi-plus" @click="addFeature" />
          </div>
          <div class="d-flex flex-column justify-start align-items-start w-100">
            <v-chip
              prepend-icon="mdi-information"
              v-for="(feature, index) of restaurant.features"
              :key="index"
              class="mx-2 my-2 text-primary"
              size="x-large"
              color="primary">
              {{ feature.name }}
              <v-tooltip activator="parent" location="top">{{ feature.description }}</v-tooltip>
            </v-chip>
          </div>
        </div>
      </div>

      <v-divider />

      <div class="d-flex px-10 py-2 w-100 bg-white justify-start">
        <div class="w-30 bg-white">
          <div class="bg-white mx-auto mb-4">
            <div class="py-4">
              <h3>Descripción</h3>
              <p class="text">
                {{ restaurant.description }}
              </p>
            </div>
            <div class="d-flex py-4 w-100 bg-white flex-wrap justify-start">
              <v-icon class="mx-2" icon="mdi-home"></v-icon>
              <p class="text mx-2">
                {{ summarizedAddress(restaurant!.address) }}
              </p>
            </div>
            <div class="d-flex py-4 w-100 bg-white flex-wrap justify-start">
              <v-icon class="mx-2" icon="mdi-phone"></v-icon>
              <p class="text mx-2">
                {{ restaurant!.phoneNumber }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <template v-slot:default="{}">
              <v-row no-gutters>
                <v-col class="d-flex justify-start" cols="4"> Reviews</v-col>
              </v-row>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="w-100 bg-white">
            <div class="w-100 d-flex">
              <v-spacer></v-spacer>
              <v-btn
                v-if="isLogged"
                append-icon="mdi-plus"
                color="action"
                variant="outlined"
                class="ma-4 xy-6"
                @click="reviewsDialog = true"
                >Nueva Review
              </v-btn>
              <AddReviewDialog
                :dialog="reviewsDialog"
                :onClose="() => (reviewsDialog = false)"
                @on-create="(review: CreateReview) => handleCreateReview(review)"
                :restaurant="restaurant as Restaurant"></AddReviewDialog>
            </div>
            <v-row>
              <v-sheet class="mx-auto bg-white" max-width="100%">
                <v-slide-group class="pa-4" show-arrows>
                  <v-slide-group-item v-for="(review, index) in restaurant.reviews" :key="index">
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <v-card :border="0" :density="'compact'" :elevation="5" color="transparent" height="250px" outlined>
                        <v-card-item>
                          <v-card-title class="mb-4">{{ review.title || 'Review sin título' }}</v-card-title>
                          <v-card-subtitle> {{ review.userName }}</v-card-subtitle>
                          <div class="d-flex align-items-center">
                            <v-rating
                              :model-value="review.value"
                              class="mr-2"
                              color="amber"
                              density="compact"
                              half-increments
                              readonly
                              size="small" />
                            <v-divider class="mx-2" vertical />
                            <span
                              class="ml-2 text-center justify-center d-flex justify-center align-items-center v-card-subtitle pa-0">
                              {{ getInformationAccuracy(review.informationAccuracy) }}
                            </span>
                          </div>
                        </v-card-item>
                        <v-card-text>
                          <div>{{ review.comment || 'No hay comentario.' }}</div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-slide-group-item>
                </v-slide-group>
              </v-sheet>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-card>
  <Reservation
    @close="reservationDialog = false"
    v-if="reservationDialog"
    :restaurant="restaurant as Restaurant"
    :value="reservationDialog" />
</template>
