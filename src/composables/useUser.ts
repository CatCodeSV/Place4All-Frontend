import getUser, { Login } from '@/helpers/getUser';
import { useUserStore } from '@/store/user.store';
import { storeToRefs } from 'pinia';
import { useBase } from './useBase';

export const useUser = () => {
  const userStore = useUserStore();
  const baseUse = useBase();
  const { token, user, isLogged } = storeToRefs(userStore);

  async function authenticate(login: Login): Promise<boolean> {
    const response = await baseUse.executeApiAction(getUser.login(login), res => {
      userStore.setToken(res.token);
      userStore.setUser(res.user);
    });
    return response.success;
  }

  return {
    //! Properties
    token,
    user,
    //! Computed
    isLogged,
    //! Metodos
    clearStore: userStore.clearState,
    authenticate,
  };
};
