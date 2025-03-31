export const USER_ROLE_OPTIONS = [
  { label: "학생", value: "STUDENT" },
  { label: "선생님", value: "TEACHER" },
  { label: "학부모", value: "PARENT" },
] as const;

export function useUserRoleOptions() {
  return USER_ROLE_OPTIONS;
}
