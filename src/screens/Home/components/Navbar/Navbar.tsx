import { View, Text } from "react-native";
import React from "react";
import { useUserContext } from "../../../../context/UserContext";
import {
  Container,
  ContainerLogout,
  LogoutText,
  TextName,
  WelcomeText,
} from "./styled";
import { DoorOpen } from "lucide-react-native";
import theme from "../../../../theme";
import { useAuthContext } from "../../../../context/AuthContext";

export default function Navbar() {
  const { user } = useUserContext();
  const { signOut } = useAuthContext();

  return (
    <Container>
      <View>
        <WelcomeText>Seja bem vindo!</WelcomeText>
        <TextName>{user?.name}</TextName>
      </View>

      <ContainerLogout onPress={signOut}>
        <LogoutText>Sair</LogoutText>
        <DoorOpen color={theme.colors.pistache} size={32} />
      </ContainerLogout>
    </Container>
  );
}
