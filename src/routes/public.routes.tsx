import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../@types/routes";
import Login from "../screens/Login/Login";
import { Home } from "lucide-react-native";

const Stack = createStackNavigator<RootStackParamList>();

export function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreenWithContext} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
