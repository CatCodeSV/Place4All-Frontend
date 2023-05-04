import { defineStore } from 'pinia';
import { ref } from 'vue';

export enum UserMessageType {
  error = 'ERROR',
  info = 'INFO',
  validation = 'VALIDATION',
}

export interface UserMessage {
  type: UserMessageType;
  message: string | string[];
}

export const useUserMessageStore = defineStore('userMessage', () => {
  const userMessageState = ref<UserMessage>();

  function storeUserMessage(message: UserMessage) {
    userMessageState.value = message;
  }

  function clearUserMessage() {
    userMessageState.value = undefined;
  }

  return {
    userMessageState,

    storeUserMessage,
    clearUserMessage,
  };
});
