import { storeToRefs } from 'pinia';
import { readonly } from 'vue';
import { UserMessageType, useUserMessageStore } from '@/store/userMessage.store';

export const useUserMessage = () => {
  const userMessageStore = useUserMessageStore();
  const { userMessageState } = storeToRefs(userMessageStore);

  function storeUserMessage(type: UserMessageType, message: string | string[]) {
    userMessageStore.storeUserMessage({
      message: message,
      type: type,
    });
  }

  return {
    userMessage: readonly(userMessageState),
    storeUserMessage,
    clearUserMessage: userMessageStore.clearUserMessage,
  };
};
