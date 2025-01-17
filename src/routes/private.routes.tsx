import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import CarModel from "../screens/CarModel/CarModel";

const Stack = createStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CarModel" component={CarModel} />
    </Stack.Navigator>
  );
}
