import { User } from '@/models/User';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
  'users',
  () => {
    const user = ref<User>();
    const token = ref<string>('');

    function setUser(userIn: User) {
      user.value = userIn;
    }

    function setToken(tokenIn: string) {
      token.value = tokenIn;
    }

    function clearState() {
      user.value = undefined;
      token.value = '';
    }

    return {
      user,
      token,
      clearState,
      setUser,
      setToken,
    };
  },
  { persist: true }
);
