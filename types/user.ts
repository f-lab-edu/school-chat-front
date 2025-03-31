import type { USER_ROLE_OPTIONS } from "~/composables/useUserRoleOptions";

export type UserRole = (typeof USER_ROLE_OPTIONS)[number]["value"];

export interface User {
  name: string;
  email: string;
  role: UserRole;
}
