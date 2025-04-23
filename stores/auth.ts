import { defineStore } from "pinia";
import type { User, UserRole } from "~/types/user";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    accessToken: null as string | null,
    refreshToken: null as string | null,
  }),

  actions: {
    async login(payload: { email: string; password: string; role: UserRole }) {
      const config = useRuntimeConfig();
      const response = await $fetch<{
        user: User;
        accessToken: string;
        refreshToken: string;
      }>(`${config.public.apiBaseUrl}/api/v1/auth/login`, {
        method: "POST",
        body: payload,
      });

      this.user = response.user;
      this.accessToken = response.accessToken;
      this.refreshToken = response.refreshToken;
    },

    logout() {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
    },

    setTokens(accessToken: string, refreshToken: string) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    },

    setUser(user: User) {
      this.user = user;
    },
  },
});
