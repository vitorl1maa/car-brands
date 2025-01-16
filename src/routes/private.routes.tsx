import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";

const Stack = createStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
