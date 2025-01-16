import { createContext, useContext, useState } from "react";
import { RootStackParamList } from "../@types/routes";

import { NavigationProp, useNavigation } from "@react-navigation/native";

import React from "react";
import {
  OnboardingContextProviderType,
  OnboardingContextType,
} from "./types/OnboardingContextType";
import { storageOnboardingSave } from "../storage/storage-onboarding";

export const OnboardingContext = createContext<OnboardingContextType | null>(
  null
);

export function OnboardingContextProvider({
  children,
}: OnboardingContextProviderType) {
  const [onBoarding, setOnBoarding] = useState<number>(1);
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Onboarding">>();

  const handleNavigateNextScreen = async () => {
    if (onBoarding === 3) {
      await storageOnboardingSave();

      navigation.navigate("Login");

      return;
    }

    setOnBoarding((current) => current + 1);
  };

  const handleNavigateGobackScreen = async () => {
    if (onBoarding === 1) {
      await storageOnboardingSave();

      navigation.navigate("Login");

      return;
    }

    setOnBoarding((current) => current - 1);
  };

  return (
    <OnboardingContext.Provider
      value={{
        onBoarding,
        setOnBoarding,
        handleNavigateNextScreen,
        handleNavigateGobackScreen,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnBoardingContext() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("Erro ao acessar o contexto OnBoadingContext.");
  }

  const {
    onBoarding,
    setOnBoarding,
    handleNavigateNextScreen,
    handleNavigateGobackScreen,
  } = context;

  return {
    onBoarding,
    setOnBoarding,
    handleNavigateNextScreen,
    handleNavigateGobackScreen,
  };
}
