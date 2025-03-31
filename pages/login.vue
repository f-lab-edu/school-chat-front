<template>
  <v-sheet
    class="d-flex justify-center align-center"
    style="height: 100vh"
    color="lightGreen"
  >
    <v-card :width="isMobile ? '90%' : '600px'" class="pa-6">
      <v-card-title
        tag="h1"
        class="text-h4 text-center"
        style="color: rgb(var(--v-theme-primary))"
      >
        로그인</v-card-title
      >
      <v-form ref="form" v-model="valid" @submit.prevent="handleLogin">
        <v-btn-toggle
          v-model="role"
          mandatory
          divided
          variant="plain"
          class="mb-4 w-100 bg-lightGray"
          selected-class="bg-secondary text-white"
          rounded="lg"
        >
          <v-btn
            v-for="option in useUserRoleOptions()"
            :key="option.value"
            :value="option.value"
            class="text-center"
            style="flex: 1"
            rounded="0"
            size="x-large"
          >
            {{ option.label }}
          </v-btn>
        </v-btn-toggle>

        <v-text-field
          v-model="email"
          label="이메일"
          type="email"
          variant="outlined"
          rounded="lg"
          size="x-large"
          dense
          :rules="[rules.required, rules.email]"
        />
        <v-text-field
          v-model="password"
          label="비밀번호"
          type="password"
          variant="outlined"
          rounded="lg"
          size="x-large"
          dense
          :rules="[rules.required]"
        />
        <v-btn
          type="submit"
          color="primary"
          class="w-100"
          size="x-large"
          rounded="lg"
          :disabled="!valid"
          >로그인</v-btn
        >
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { useAuthStore } from "~/stores/auth";
import type { UserRole } from "~/types/user";
import { useRouter } from "vue-router";

// 초기화
const authStore = useAuthStore();
const router = useRouter();
const valid = ref(false);
const email = ref("");
const password = ref("");
const role = ref<UserRole>("STUDENT");

// 반응형 카드 너비 계산
const { mobile } = useDisplay();
const isMobile = computed(() => mobile.value);

// 유효성 검사 규칙 정의
const rules = {
  required: (value: string) => !!value || "필수 입력 항목입니다.",
  email: (value: string) =>
    /.+@.+\..+/.test(value) || "유효한 이메일 형식이어야 합니다.",
};

// 로그인 처리 함수
const handleLogin = async () => {
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
      role: role.value,
    });
    alert("로그인 성공");
    router.push("/");
    // 로그인 성공 후 리다이렉트
  } catch (error) {
    console.error("로그인 오류:", error);
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 16px;
}

.v-btn {
  border-radius: 10px;
}
</style>
