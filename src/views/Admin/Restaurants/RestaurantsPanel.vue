<script setup lang="ts">
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import { useAdministrator } from '@/composables/useAdministrator';
import { onBeforeMount, onUpdated, ref } from 'vue';
import { Restaurant } from '@/models/Restaurant';
import ConfirmationDialog from '@/components/ConfirmationDialog.vue';
import { useConfirmationDialog } from '@/composables/useConfirmationDialog';
import { useUserMessage } from '@/composables/useUserMessage';
import { UserMessageType } from '@/store/userMessage.store';
import { ActionResponse } from '@/composables/ActionResponse';
import EditRestaurantDialog from '@/views/Admin/Restaurants/Components/EditRestaurantDialog.vue';
import { EditRestaurant } from '@/helpers/getAdministrator';
import { ViewMode } from '@/enums/ViewMode';
import { useRestaurant } from '@/composables/useRestaurant';

const { getFullRestaurants, deleteRestaurant, editRestaurant } = useAdministrator();
const { showConfirmationDialog } = useConfirmationDialog();
const { storeUserMessage } = useUserMessage();
const { setRestaurants } = useRestaurant();
const restaurantEditDialog = ref<InstanceType<typeof EditRestaurantDialog> | null>(null);

onBeforeMount(async () => {
  loading.value = true;
  adminRestaurants.value = await getFullRestaurants();
  loading.value = false;
});

const adminRestaurants = ref<Restaurant[]>([]);
const loading = ref(false);
const headers = ref([
  {
    title: 'Id',
    sortable: true,
    key: 'id',
  },
  { title: 'Nombre', key: 'name', sortable: true },
  { title: 'Creador', key: 'creator', sortable: true },
  { title: 'Fecha de creación', key: 'createDate', sortable: true },
  {
    title: 'Fecha de modificación',
    key: 'updateDate',
    sortable: true,
  },
  { title: 'Acciones', key: 'actions', sortable: true },
]);
const itemsPerPage = 5;

function createRestaurant(restaurant: Restaurant) {
  console.log(restaurant);
}

async function editItem(item: Restaurant) {
  loading.value = true;
  const res = await editRestaurant(item.id!, {
    name: item.name,
    phoneNumber: item.phoneNumber,
    description: item.description,
  } as EditRestaurant);
  if (res.success) {
    storeUserMessage(UserMessageType.success, `El restaurante ${item.name} ha sido editado correctamente`);
    await setRestaurants();
    loading.value = false;
    return;
  }
  loading.value = false;
  storeUserMessage(UserMessageType.error, `El restaurante ${item.name} no ha podido ser editado`);
}

function deleteItem(restaurant: Restaurant) {
  showConfirmationDialog(
    `¿Estás seguro de que quieres eliminar el restaurante ${restaurant.name} con id ${restaurant.id}?`,
    async () => {
      loading.value = true;
      let result: ActionResponse<Restaurant> = await deleteRestaurant(restaurant.id!);
      if (result.success) {
        adminRestaurants.value = adminRestaurants.value.filter(r => r.id !== restaurant.id!);
        storeUserMessage(UserMessageType.success, `El restaurante ${restaurant.name} ha sido eliminado correctamente`);
        loading.value = false;
        return;
      }
      loading.value = false;
      storeUserMessage(UserMessageType.error, `El restaurante ${restaurant.name} no ha podido ser eliminado`);
    }
  );
}
</script>

<template>
  <div class="d-flex flex-column w-100 align-center pa-12 pb-0 justify-center">
    <h3 class="text-h3 mb-5 text-primary">Restaurantes</h3>
    <div class="mx-auto w-100">
      <v-data-table-virtual
        v-if="!loading"
        :height="500"
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="adminRestaurants"
        item-value="name"
        class="elevation-4 rounded mx-auto">
        <template v-slot:item.actions="{ item }">
          <div class="d-flex w-100 justify-lg-space-around">
            <v-icon
              size="small"
              color="primary"
              class="me-2"
              @click="restaurantEditDialog?.show(item.raw as Restaurant, ViewMode.Edit)">
              mdi-pencil-outline
            </v-icon>
            <v-icon color="primary" size="small" @click="deleteItem(item.raw as Restaurant)"> mdi-delete-outline </v-icon>
          </div>
        </template>
      </v-data-table-virtual>
      <v-progress-linear v-if="loading" color="primary" />
    </div>
  </div>
  <EditRestaurantDialog
    ref="restaurantEditDialog"
    @on-accept="(viewMode, restaurant) => (viewMode == ViewMode.Edit ? editItem(restaurant) : createRestaurant(restaurant))" />
</template>

<style scoped></style>
