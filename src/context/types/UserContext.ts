import { ReactNode } from "react";

export type UserType = {
  id: number;
  name: string;
  token?: string;
};

export type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  toggleUser: (userData: UserType) => Promise<void>;
};

export type UserContextProviderProps = {
  children: ReactNode;
};