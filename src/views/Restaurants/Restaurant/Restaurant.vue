<script lang="ts" setup>
import { useFeature } from '@/composables/useFeature';
import { useRestaurant } from '@/composables/useRestaurant';
import { Address } from '@/models/Address';
import { Features } from '@/models/Features';
import { Review } from '@/models/Review';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import AddReviewDialog from './Review/AddReviewDialog.vue';

const { restaurant, addFeatures } = useRestaurant();
const { features, setFeatures } = useFeature();
const router = useRouter();
onMounted(async () => {
  if (features.value.length < 1) {
    await setFeatures();
  }
});
function goToListRestaurants() {
  router.push('/restaurantes');
}

const selectedFeatures = ref<Features[]>([]);
const isEdit = ref(false);
const reviews = ref<Review[]>([]);
function reserve() {}
function summarizedAddress(address: Address) {
  return `${address.street} ${address.number}, ${address.zipCode}. ${address.city}`;
}

function getImageUrl(image: string) {
  return image.replace('@', '/src');
}

async function addFeature() {
  await addFeatures(restaurant.value!, selectedFeatures.value);
}

const reviewsDialog = ref(false);
</script>

<template>
  <!--Boton de volver a la lista-->
  <v-card-actions class="mx-auto">
    <v-btn color="primary" variant="elevated" @click="goToListRestaurants()">
      <v-icon start icon="mdi-arrow-left"></v-icon>
      Volver
    </v-btn>
  </v-card-actions>
  <v-card outlined color="transparent" :elevation="2" class="mx-auto mb-10 bg-white" max-width="80%">
    <v-card>
      <div class="d-flex flex-colum bg-white">
        <v-img v-for="image of restaurant!.image" v-bind:key="image" cover height="250" width="30%" :src="getImageUrl(image)" />
      </div>
      <div class="d-flex pa-4 w-100 bg-white">
        <h2 class="align-self-center">{{ restaurant!.name }} |</h2>
        <v-rating
          class="ml-2 align-self-center"
          :model-value="restaurant?.reviews?.reviewsAverage"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="medium" />
        <v-spacer />
        <v-btn color="secondary" icon="mdi-pencil" class="w-80 my-3 mr-4" @click="isEdit = !isEdit" />
        <v-btn color="primary" rounded="pill" prepend-icon="mdi-calendar-clock" class="w-80 my-4" @click="reserve">Reservar</v-btn>
      </div>
      <v-divider />
      <div class="d-flex w-100 bg-white">
        <div class="w-25 bg-white pa-4">
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
              >Nuevo Servicio</v-autocomplete
            >
            <v-btn icon="mdi-plus" color="secondary" class="w-80 ml-4" @click="addFeature" />
          </div>
          <div class="d-flex flex-wrap justify-center align-items-center w-100">
            <v-btn v-for="(feature, index) in restaurant?.servicio" :key="index" class="ma-1 mx-2">
              {{ feature.name }}
              <v-tooltip activator="parent" location="top">{{ feature.description }}</v-tooltip>
            </v-btn>
          </div>
        </div>
        <div class="w-75 bg-white">
          <div class="bg-white mx-auto mb-4 pa-4" height="100%">
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
                <h4 class="my-4 text">Ubicacion</h4>
              </v-col>
              <v-col align-self="center" cols="12" sm="9" md="9">
                <p class="text">{{ summarizedAddress(restaurant!.address) }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col align-self="center" cols="12" sm="3" md="3">
                <h4 class="my-4 text w-100">Descripcion</h4>
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
                <v-col cols="4" class="d-flex justify-start"> Reviews </v-col>
              </v-row>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="w-100 bg-white">
            <div class="w-100 d-flex">
              <v-spacer></v-spacer>
              <v-btn color="primary" append-icon="mdi-plus" @click="reviewsDialog = true">Nueva Review</v-btn>
              <AddReviewDialog :dialog="reviewsDialog"></AddReviewDialog>
            </div>
            <v-col class="h-100" cols="12" lg="4" md="6" sm="12">
              <v-card v-for="review in reviews" outlined color="transparent" :border="0" :elevation="5" class="h-100">
                <v-card-item>
                  <v-card-title>{{ review.comment.title }}</v-card-title>
                  <v-card-subtitle> {{ review.user.name }} </v-card-subtitle>
                  <v-rating :model-value="review.value" color="amber" density="compact" half-increments readonly size="small" />
                </v-card-item>
                <v-card-text>
                  <div>{{ review.comment }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-card>
</template>