<script setup lang="ts">
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import { useAdministrator } from '@/composables/useAdministrator';
import { onBeforeMount, ref } from 'vue';
import { Restaurant } from '@/models/Restaurant';
import ConfirmationDialog from '@/components/ConfirmationDialog.vue';
import { useConfirmationDialog } from '@/composables/useConfirmationDialog';
import { useUserMessage } from '@/composables/useUserMessage';
import { UserMessageType } from '@/store/userMessage.store';
import { ActionResponse } from '@/composables/ActionResponse';

const { getFullRestaurants, deleteRestaurant } = useAdministrator();
const { showConfirmationDialog } = useConfirmationDialog();
const { storeUserMessage } = useUserMessage();

onBeforeMount(async () => {
  adminRestaurants.value = await getFullRestaurants();
});

const adminRestaurants = ref<Restaurant[]>([]);
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

function editItem(item: any) {
  console.log(item);
}

function deleteItem(restaurant: Restaurant) {
  showConfirmationDialog(
    `¿Estás seguro de que quieres eliminar el restaurante ${restaurant.name} con id ${restaurant.id}?`,
    async () => {
      let result: ActionResponse<Restaurant> = await deleteRestaurant(restaurant.id!);
      if (result.success) {
        adminRestaurants.value = adminRestaurants.value.filter(r => r.id !== restaurant.id!);
        storeUserMessage(UserMessageType.success, `El restaurante ${restaurant.name} ha sido eliminado correctamente`);
        return;
      }
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
        :height="500"
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="adminRestaurants"
        item-value="name"
        class="elevation-4 rounded mx-auto">
        <template v-slot:item.actions="{ item }">
          <div class="d-flex w-100 justify-lg-space-around">
            <v-icon size="small" color="primary" class="me-2" @click="editItem(item.raw)"> mdi-pencil-outline</v-icon>
            <v-icon color="primary" size="small" @click="deleteItem(item.raw as Restaurant)"> mdi-delete-outline </v-icon>
          </div>
        </template>
      </v-data-table-virtual>
    </div>
  </div>
  <ConfirmationDialog value="confirmationDialog" entity="" />
</template>

<style scoped></style>
