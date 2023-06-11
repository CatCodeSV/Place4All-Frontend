import { User } from '@/models/User';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import jwt_decode from 'jwt-decode';

interface JwtDecodedRoot {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname': string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  exp: number;
  iss: string;
  aud: string;
  IsInternal: string;
}

interface TokenDetails {
  nombre: string;
  apellidos?: string;
  exp: number;
  roles: string[];
  IsInternal: boolean;
}

function parseToken(token: string): TokenDetails {
  const decodedToken = jwt_decode<JwtDecodedRoot>(token);
  const userRoles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  return {
    nombre: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
    apellidos: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'],
    exp: decodedToken.exp,
    roles: Array.isArray(userRoles) ? userRoles.map(r => JSON.parse(r)) : [userRoles],
    IsInternal: decodedToken.IsInternal == 'True',
  };
}

export const useUserStore = defineStore(
  'users',
  () => {
    const user = ref<User>();
    const token = ref<string>('');
    const tokenDetailsState = computed(() => (token.value ? parseToken(token.value) : undefined));
    const isAdmin = computed(() => tokenDetailsState.value?.roles.some(r => r == 'Administrator') ?? false);
    const isLogged = computed(() => {
      return user.value != null && token.value != '';
    });

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
      isLogged,
      isAdmin,
      clearState,
      setUser,
      setToken,
    };
  },
  { persist: true }
);
