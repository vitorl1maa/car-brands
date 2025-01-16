import React, { createContext, useContext, useState, ReactNode } from "react";
import { authSignIn } from "../api/auth/signIn";
import { storageUserRemove, storageUserSave } from "../storage/storage-user";
import { AuthContextProps, InitialRouteNameType } from "./types/AuthContext";
import { AxiosError } from "axios";
import {
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from "../storage/storage-token";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [initialRouteName, setInitialRouteName] =
    useState<InitialRouteNameType>("Onboarding");

  const signIn = async (user: string, password: string): Promise<boolean> => {
    try {
      const response = await authSignIn({ user, password });
      if (response.data && response.data.user && response.data.user.token) {
        await storageUserSave(response.data.user);
        await storageAuthTokenSave(response.data.user.token);
        setIsSignedIn(true);
        return true;
      }
      return false;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        setErrorMessage(
          (axiosError.response?.data as { message: string }).message
        );

        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
      return false;
    }
  };

  const signOut = () => {
    setInitialRouteName("Login");
    storageUserRemove();
    storageAuthTokenRemove();
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isSignedIn,
        errorMessage,
        initialRouteName,
        setInitialRouteName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Erro ao acessar o contexto AuthProvider");
  }
  return context;
};
