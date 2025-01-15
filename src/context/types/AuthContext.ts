import { ReactNode } from 'react';

export type AuthContextProps = {
  isSignedIn: boolean;
  setIsSignedIn?: (value: boolean) => void;
  signIn: (user: string, password: string) => Promise<boolean>;
  signOut: () => void;
  setErrorMessage?: () => void;
  errorMessage: string

}

export type AuthContentProviderProps = {
  children: ReactNode;
}