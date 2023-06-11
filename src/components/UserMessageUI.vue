<script setup lang="ts">
import { isArray } from '@vue/shared';
import { computed, watchEffect } from 'vue';
import { useUserMessage } from '@/composables/useUserMessage';
import { UserMessageType } from '@/store/userMessage.store';

const { userMessage, clearUserMessage } = useUserMessage();
const { info } = UserMessageType;

watchEffect(() => {
  if (userMessage.value?.message) {
    setTimeout(
      () => {
        clearUserMessage();
      },
      userMessage.value.type == info ? 2000 : 4000
    );
  }
});

const userMessageHasValue = computed(() => {
  return userMessage.value != undefined;
});

const snackBarColor = computed(() => {
  if (userMessage.value?.type == UserMessageType.error) {
    return 'error';
  }
  if (userMessage.value?.type == UserMessageType.validation) {
    return 'warning';
  }
  if (userMessage.value?.type == UserMessageType.success) {
    return 'success';
  }
  return 'info';
});
</script>
<template>
  <v-snackbar v-model="userMessageHasValue" multi-line :color="snackBarColor" close-on-back>
    <span v-if="userMessage?.type == UserMessageType.validation">Se han encontrado los siguientes errores de validación: <br /></span>
    <div v-if="isArray(userMessage?.message)">
      <span v-for="(message, index) in userMessage?.message" :key="index">{{ message }}</span>
    </div>
    <span v-else>{{ userMessage?.message }}</span>
    <template v-slot:actions>
      <v-btn icon="mdi-close" color="white" @click="clearUserMessage()"></v-btn>
    </template>
  </v-snackbar>
</template>
<style scoped lang="scss"></style>
