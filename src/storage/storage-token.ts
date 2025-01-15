import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageEnum } from "./storage-config";

export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(storageEnum.AUTH_TOKEN_STORAGE, token)
};

export async function storageAuthTokenGet() {
  const token = await AsyncStorage.getItem(storageEnum.AUTH_TOKEN_STORAGE);

  if (!token) return token;

  return token;
};


export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(storageEnum.AUTH_TOKEN_STORAGE)
};
