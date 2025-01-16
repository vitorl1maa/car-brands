import { View, Text } from "react-native";
import React from "react";
import { Container, Info, TextCard, Title } from "./styled";
import { CarFront } from "lucide-react-native";
import theme from "../../theme";
import { CardInfoProps } from "./types";

const CardInfo = ({ car, coding }: CardInfoProps) => {
  return (
    <Container>
      <View>
        <Info>
          <Title>Nome:</Title>
          <TextCard>{car}</TextCard>
        </Info>

        <Info>
          <Title>Código do veículo:</Title>
          <TextCard># {coding}</TextCard>
        </Info>
      </View>

      <View>
        <CarFront color={theme.colors.pistache} size={25} />
      </View>
    </Container>
  );
};

export default CardInfo;
