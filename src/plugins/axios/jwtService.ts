import { useCookies } from "vue3-cookies";
const TOKEN = "token" as string;
const AUTH_EXPIRATION = "30d";
const { cookies } = useCookies();
/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return cookies.get(TOKEN);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  cookies.set(TOKEN, token, AUTH_EXPIRATION);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  cookies.remove(TOKEN);
};

export default { getToken, saveToken, destroyToken };
