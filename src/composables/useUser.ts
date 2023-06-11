import getUser, { CreateUser, Login } from '@/helpers/getUser';
import { useUserStore } from '@/store/user.store';
import { storeToRefs } from 'pinia';
import { useBase } from './useBase';

export const useUser = () => {
  const userStore = useUserStore();
  const baseUse = useBase();
  const { token, user, isLogged, isAdmin } = storeToRefs(userStore);

  async function authenticate(login: Login): Promise<boolean> {
    const response = await baseUse.executeApiAction(getUser.login(login), res => {
      userStore.setToken(res.token);
      userStore.setUser(res.user);
    });
    return response.success;
  }

  async function createUser(createUser: CreateUser) {
    const response = await baseUse.executeApiAction(getUser.createUser(createUser), res => {
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
    isAdmin,
    //! Métodos
    clearStore: userStore.clearState,
    authenticate,
    createUser,
  };
};
