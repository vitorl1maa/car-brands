import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";
import AppNavigator from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";
import Loading from "./src/components/Loading/Loading";
import { UserProvider } from "./src/context/UserContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AuthProvider>
          <StatusBar style="light" backgroundColor={theme.colors.primary} />
          <AppNavigator />
        </AuthProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
