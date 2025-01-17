import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";
import { useAuthContext } from "../context/AuthContext";
import { PublicRoutes } from "./public.routes";
import { PrivateRoutes } from "./private.routes";

export default function AppNavigator() {
  const { isSignedIn } = useAuthContext();
  return (
    <NavigationContainer>
      {isSignedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
