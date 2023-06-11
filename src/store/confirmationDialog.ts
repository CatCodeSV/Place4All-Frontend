import { defineStore } from 'pinia';
import { ref } from 'vue';
import ConfirmationDialog from '../components/ConfirmationDialog.vue';

export const useConfirmationDialogStore = defineStore('confirmationDialog', () => {
  const confirmationDialog = ref(null as InstanceType<typeof ConfirmationDialog> | null);

  function setConfirmationDialogue(confirmDialog: InstanceType<typeof ConfirmationDialog> | null) {
    confirmationDialog.value = confirmDialog;
  }

  return {
    confirmationDialog,
    setConfirmationDialogue,
  };
});
