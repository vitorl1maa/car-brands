import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../@types/routes";
import Login from "../screens/Login/Login";
import { Home } from "lucide-react-native";
import { useAuthContext } from "../context/AuthContext";
import { OnboardingContextProvider } from "../context/OnBoardingContext";
import OnboardingScreen from "../screens/OnboardingScreen/OnboardingScreen";

const Stack = createStackNavigator<RootStackParamList>();

export function PublicRoutes() {
  const { initialRouteName } = useAuthContext() as {
    initialRouteName: keyof RootStackParamList;
  };

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreenWithContext} />

      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

const OnboardingScreenWithContext = () => {
  return (
    <OnboardingContextProvider>
      <OnboardingScreen />
    </OnboardingContextProvider>
  );
};
