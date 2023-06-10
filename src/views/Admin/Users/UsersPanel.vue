<script setup lang="ts">
import { useAdministrator } from '@/composables/useAdministrator';
import { User } from '@/models/User';
import { onBeforeMount, ref } from 'vue';
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import { useConfirmationDialog } from '@/composables/useConfirmationDialog';
import { useUserMessage } from '@/composables/useUserMessage';
import { UserMessageType } from '@/store/userMessage.store';

const { getAllUsers, deleteUser } = useAdministrator();
const { showConfirmationDialog } = useConfirmationDialog();
const { storeUserMessage } = useUserMessage();

onBeforeMount(async () => {
  users.value = await getAllUsers();
});

const users = ref<User[]>([]);
const headers = ref([
  {
    title: 'Id',
    sortable: true,
    key: 'id',
  },
  {
    title: 'Nombre',
    key: 'name',
    sortable: true,
  },
  {
    title: 'Discapacidad',
    key: 'hasDisability',
    sortable: true,
  },
  {
    title: 'Grado de discapacidad',
    key: 'disabilityDegree',

    sortable: true,
  },
  { title: 'Acciones', key: 'actions', sortable: true },
]);
const itemsPerPage = 5;

function editItem(item: any) {
  console.log(item);
}

function deleteItem(item: User) {
  showConfirmationDialog(`¿Estás seguro de que quieres eliminar al usuario ${item.name}?`, async () => {
    let result = await deleteUser(item.id!);
    if (result.success) {
      users.value = users.value.filter(r => r.id !== item.id!);
      storeUserMessage(UserMessageType.success, `El usuario ${item.name} ha sido eliminado correctamente`);
      return;
    }
    storeUserMessage(UserMessageType.error, `El usuario ${item.name} no ha podido ser eliminado`);
  });
}
</script>

<template>
  <div class="d-flex flex-column w-100 align-center pa-12 pb-0 justify-center">
    <h3 class="text-h3 mb-5 text-primary">Usuarios</h3>
    <div class="mx-auto w-100">
      <v-data-table-virtual
        :height="500"
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="users"
        item-value="name"
        class="elevation-4 rounded mx-auto">
        <template v-slot:item.actions="{ item }">
          <div class="d-flex w-100 justify-lg-space-around">
            <v-icon size="small" color="primary" class="me-2" @click="editItem(item.raw)"> mdi-pencil-outline</v-icon>
            <v-icon color="primary" size="small" @click="deleteItem(item.raw as User)"> mdi-delete-outline</v-icon>
          </div>
        </template>
      </v-data-table-virtual>
    </div>
  </div>
</template>

<style scoped></style>
