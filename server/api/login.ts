export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (
    body.email === "test@example.com" &&
    body.password === "1" &&
    body.role === "STUDENT"
  ) {
    return {
      user: {
        name: "테스트 사용자",
        email: "test@example.com",
        role: "STUDENT",
      },
      accessToken: "fake-jwt-token",
      refreshToken: "fake-refresh-token",
    };
  }

  throw createError({ statusCode: 401, message: "잘못된 자격 증명" });
});
