import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_FIPE_API_URL;
const loginApiUrl = process.env.EXPO_PUBLIC_API_URL;

export const carListApi = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
});

export const loginApi = axios.create({
  baseURL: loginApiUrl,
  timeout: 1000,
});

