import { createContext, ReactNode, useContext, useState } from "react";
import {
  UserContextProviderProps,
  UserContextType,
  UserType,
} from "./types/UserContext";
import { storageUserSave } from "../storage/storage-user";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  async function toggleUser(userData: UserType) {
    try {
      setUser(userData);

      await storageUserSave(userData);
    } catch (error) {
      throw error;
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Erro ao acessar o contexto UserContext");
  }

  return context;
};
