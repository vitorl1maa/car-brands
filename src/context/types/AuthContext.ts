import { ReactNode } from 'react';

export type AuthContextProps = {
  isSignedIn: boolean;
  setIsSignedIn?: (value: boolean) => void;
  signIn: (user: string, password: string) => Promise<boolean>;
  signOut: () => void;
  setErrorMessage?: () => void;
  errorMessage: string;
  initialRouteName: InitialRouteNameType;
  setInitialRouteName: React.Dispatch<
    React.SetStateAction<InitialRouteNameType>
  >;

}

export type AuthContentProviderProps = {
  children: ReactNode;
}

export type InitialRouteNameType = "Login" | "Loading" | "Onboarding";