import { loginApi } from "../config";

interface SignInProps {
  user: string;
  password: string;
}

export async function authSignIn({ user, password }: SignInProps) {
  try {
    const response = await loginApi.post("/signIn", {
      user,
      password,
    });
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
