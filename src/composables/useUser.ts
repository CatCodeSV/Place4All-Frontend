import getUser, { Login } from '@/helpers/getUser';
import { storeToRefs } from 'pinia';
import { useBase } from './useBase';

export const useUser = () => {
  const userStore = useUserStore();
  const baseUse = useBase();
  const { tokenState, userState, isLoggedState, returnUrlState } = storeToRefs(userStore);

  async function authenticate(login: Login): Promise<boolean> {
    const response = await baseUse.executeApiAction(getUser.login(login), token => userStore.setToken(token));
    return response.success;
  }

  return {
    //! Properties
    isLogged: isLoggedState,
    returnUrl: returnUrlState,
    token: tokenState,
    user: userState,
    //! Computed
    //! Metodos
    clearStore: userStore.clearState,
    authenticate,
  };
};
