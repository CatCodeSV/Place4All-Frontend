import ConfirmationDialog from '@/components/ConfirmationDialog.vue';
import { useConfirmationDialogStore } from '@/store/confirmationDialog';

export const useConfirmationDialog = () => {
  const confirmationDialogStore = useConfirmationDialogStore();

  function setConfirmationDialog(confirmationDialogue: InstanceType<typeof ConfirmationDialog> | null) {
    confirmationDialogStore.setConfirmationDialogue(confirmationDialogue);
  }

  function showConfirmationDialog(message: string, onConfirm: () => Promise<void> | void, elementsToInclude?: string[]) {
    confirmationDialogStore.confirmationDialog?.show(message, onConfirm, elementsToInclude);
  }

  return { showConfirmationDialog, setConfirmationDialog };
};
