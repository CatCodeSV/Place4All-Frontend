<script lang="ts" setup>
import { useFeature } from '@/composables/useFeature';
import { useRestaurant } from '@/composables/useRestaurant';
import { useReview } from '@/composables/useReview';
import { useUser } from '@/composables/useUser';
import { Address } from '@/models/Address';
import { Features } from '@/models/Features';
import { Review } from '@/models/Review';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddReviewDialog from './Review/AddReviewDialog.vue';

const { restaurant, addFeatures, setRestaurant } = useRestaurant();
const { token } = useUser();
const { getReviewsByRestaurant } = useReview();
const { features, setFeatures } = useFeature();
const router = useRouter();
const route = useRoute();
const reviews = ref<Review[]>();
onBeforeMount(async () => {
  loading.value = true;
  const restaurantId = route.params.id;
  if (restaurant.value === undefined) await setRestaurant(restaurantId[0]);
  if (features.value.length < 1) await setFeatures();
  reviews.value = await getReviewsByRestaurant(restaurant.value!.id!);
  loading.value = false;
});

function goToListRestaurants() {
  router.push('/restaurantes');
}

const loading = ref(false);
const selectedFeatures = ref<Features[]>([]);
const isEdit = ref(false);

function reserve() {
  window.open('https://forms.gle/Mp3PDwL9c6tbWjTq9', '_blank');
}

function summarizedAddress(address: Address) {
  return `${address.street} ${address.number}, ${address.zipCode}. ${address.city}`;
}

function getImageUrl(image: string) {
  return image.replace('@/assets', '');
}

async function addFeature() {
  await addFeatures(restaurant.value!, selectedFeatures.value);
}

const reviewsDialog = ref(false);
const windowWidth = ref(window.innerWidth);
</script>

<template>
  <!--Botón de volver a la lista-->
  <v-card-actions v-if="!loading" class="mx-auto">
    <v-btn color="primary" variant="elevated" @click="goToListRestaurants()">
      <v-icon start icon="mdi-arrow-left"></v-icon>
      Volver
    </v-btn>
  </v-card-actions>
  <v-card :loading="loading" outlined color="transparent" :elevation="2" class="mx-auto mb-10 bg-white" max-width="80%">
    <v-card>
      <div class="d-flex flex-colum bg-white">
        <v-img
          v-for="image of restaurant!.images"
          v-bind:key="image.id"
          cover
          height="250"
          width="30%"
          :src="getImageUrl(image.link)" />
      </div>
      <div class="d-flex pa-4 w-100 bg-white flex-wrap">
        <h2 class="align-self-center">{{ restaurant!.name }} |</h2>
        <!-- <v-rating
          class='ml-2 align-self-center'
          :model-value='restaurant?.reviews?.reviewsAverage || 0'
          color='amber'
          density='compact'
          half-increments
          readonly
          size='medium' /> -->
        <v-spacer />
        <v-btn
          v-if="token !== '' || token === undefined"
          color="secondary"
          icon="mdi-pencil"
          class="w-80 my-3 mr-4"
          @click="isEdit = !isEdit" />
        <v-btn color="primary" rounded="pill" prepend-icon="mdi-calendar-clock" class="w-80 my-4" @click="reserve"> Reservar </v-btn>
      </div>
      <v-divider />
      <div class="d-flex w-100 bg-white">
        <div class="w-25 bg-white pa-4" v-if="windowWidth > 1200">
          <div class="d-flex align-items-center justify-space-between" v-if="isEdit">
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
              >Nuevo Servicio
            </v-autocomplete>
            <v-btn icon="mdi-plus" color="secondary" class="w-80 ml-4" @click="addFeature" />
          </div>
          <div class="d-flex flex-wrap justify-center align-items-center w-100">
            <v-btn v-for="(feature, index) in restaurant?.servicio" :key="index" color="secondary" variant="flat" class="ma-1 mx-2">
              {{ feature.name }}
              <v-tooltip activator="parent" location="top">{{ feature.description }}</v-tooltip>
            </v-btn>
          </div>
        </div>
        <div class="w-75 bg-white">
          <div class="bg-white mx-auto mb-4 pa-4">
            <v-row>
              <v-col align-self="center" cols="12" sm="3" md="3">
                <h4 class="my-4 text">Teléfono</h4>
              </v-col>
              <v-col align-self="center" cols="12" sm="9" md="9">
                <p class="text">{{ restaurant!.phoneNumber }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col align-self="center" cols="12" sm="3" md="3">
                <h4 class="my-4 text">Ubicación</h4>
              </v-col>
              <v-col align-self="center" cols="12" sm="9" md="9">
                <p class="text">{{ summarizedAddress(restaurant!.address) }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col align-self="center" cols="12" sm="3" md="3">
                <h4 class="my-4 text w-100">Descripción</h4>
              </v-col>
              <v-col align-self="end" cols="12" sm="9" md="9">
                <p class="text">
                  {{ restaurant!.descripcion }}
                </p>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <template v-slot:default="{}">
              <v-row no-gutters>
                <v-col cols="4" class="d-flex justify-start"> Reviews</v-col>
              </v-row>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="w-100 bg-white">
            <div class="w-100 d-flex">
              <v-spacer></v-spacer>
              <v-btn color="success" variant="flat" append-icon="mdi-plus" @click="reviewsDialog = true">Nueva Review</v-btn>
              <AddReviewDialog
                :dialog="reviewsDialog"
                :restaurant="restaurant!"
                :onClose="() => (reviewsDialog = false)"></AddReviewDialog>
            </div>
            <v-row>
              <v-col cols="12" lg="4" md="6" sm="12" v-for="(review, index) in reviews" :key="index">
                <v-card outlined color="transparent" :border="0" :density="'compact'" height="250px" :elevation="5">
                  <v-card-item>
                    <v-card-title>{{ review }}</v-card-title>
                    <v-card-subtitle> {{ review.user.name }}</v-card-subtitle>
                    <v-rating :model-value="review.value" color="amber" density="compact" half-increments readonly size="small" />
                  </v-card-item>
                  <v-card-text>
                    <div>{{ review.comment || 'No hay comentario.' }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-card>
</template>
