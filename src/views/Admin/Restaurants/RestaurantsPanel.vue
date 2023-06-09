<script setup lang="ts">
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import { useAdministrator } from '@/composables/useAdministrator';
import { onBeforeMount, ref } from 'vue';
import { Restaurant } from '@/models/Restaurant';

const { getFullRestaurants } = useAdministrator();

onBeforeMount(async () => {
  restaurants.value = await getFullRestaurants();
});

const restaurants = ref<Restaurant[]>([]);
const headers = [
  {
    title: 'Id',
    align: 'start',
    sortable: true,
    key: 'id',
  },
  { title: 'Nombre', align: 'center', key: 'name', sortable: true },
  { title: 'Creador', align: 'center', key: 'creator', sortable: true },
  { title: 'Fecha de creación', align: 'center', key: 'creationDate', sortable: true },
  { title: 'Dirección', align: 'center', key: 'address', sortable: true },
  { title: 'Acciones', align: 'center', key: 'actions', sortable: true },
];
const itemsPerPage = 5;

function editItem(item: any) {
  console.log(item);
}

function deleteItem(item: any) {
  console.log(item);
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
        :items="restaurants"
        item-value="name"
        class="elevation-4 rounded mx-auto">
        <template v-slot:item.actions="{ item }">
          <div class="d-flex w-100 justify-lg-space-around">
            <v-icon size="small" color="primary" class="me-2" @click="editItem(item.raw)"> mdi-pencil-outline </v-icon>
            <v-icon color="primary" size="small" @click="deleteItem(item.raw)"> mdi-delete-outline </v-icon>
          </div>
        </template>
      </v-data-table-virtual>
    </div>
  </div>
</template>

<style scoped></style>
