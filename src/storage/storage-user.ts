import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageEnum } from "./storage-config";

export async function storageUserSave(user) {
  await AsyncStorage.setItem(storageEnum.USER_STORAGE, JSON.stringify(user));
}

export async function storageUserGet() {
  const user = await AsyncStorage.getItem(storageEnum.USER_STORAGE);
  if (!user) return user;

  return JSON.parse(user);
};

export async function storageUserRemove() {
  await AsyncStorage.removeItem(storageEnum.USER_STORAGE)
};