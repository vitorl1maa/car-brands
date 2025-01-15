import { View, Text } from "react-native";
import React from "react";
import FormLogin from "./components/FormLogin";
import { Container, ContainerText, TextDetail, Title } from "./styled";
import { CarFront } from "lucide-react-native";
import theme from "../../theme";

const Login = () => {
  return (
    <Container>
      <ContainerText>
        <Title>
          Car<TextDetail> Brands</TextDetail>
        </Title>
        <CarFront
          color={theme.colors.pistache}
          size={25}
          style={{ marginBottom: 10 }}
        />
      </ContainerText>
      <FormLogin />
    </Container>
  );
};

export default Login;
