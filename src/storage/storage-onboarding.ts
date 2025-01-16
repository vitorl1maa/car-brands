import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageEnum } from "./storage-config";

export async function storageOnboardingSave() {
  const onboarding = JSON.stringify({ firstAccess: false });
  await AsyncStorage.setItem(storageEnum.ONBOARDING_STORAGE, onboarding)
};

export async function storageOnboardingGet() {
  const onboarding = await AsyncStorage.getItem(storageEnum.ONBOARDING_STORAGE);

  if (!onboarding) return onboarding;

  return JSON.parse(onboarding);
};

export async function storageOnboardingRemove() {
  await AsyncStorage.removeItem(storageEnum.ONBOARDING_STORAGE)
};