import { SafeAreaView } from "react-native";
import { OnBoardingProps } from "./types/OnBoardingProps";
import { useOnBoardingContext } from "../../context/OnBoardingContext";
import {
  OverLay,
  Container,
  Image,
  CardContainer,
  ImageContainer,
  CardTitle,
  CardFeedBackContainer,
  CircleIcon,
  CardFooter,
  NextButton,
  NextButtonText,
  BackButton,
  BackButtonText,
} from "./styled";
import React from "react";
import Button from "../Button/Button";
import theme from "../../theme";

export function OnBoarding({ imgPath, children }: OnBoardingProps) {
  const { onBoarding, handleNavigateNextScreen, handleNavigateGobackScreen } =
    useOnBoardingContext();

  const nextButtonText =
    onBoarding == 1 ? "Próximo" : onBoarding == 2 ? "Próximo" : "Começar";

  const backButtonText =
    onBoarding == 1 ? "Pular" : onBoarding == 2 ? "Voltar" : "Voltar";

  const cardTitle =
    onBoarding == 1 ? "Lorem" : onBoarding == 2 ? "Lorem" : "Lorem";

  return (
    <OverLay>
      <Container>
        <ImageContainer>
          <Image
            source={imgPath}
            defaultSource={imgPath}
            resizeMode="contain"
          />
        </ImageContainer>
        <CardContainer>
          <CardFeedBackContainer>
            <CircleIcon active={onBoarding === 1} />
            <CircleIcon active={onBoarding === 2} />
            <CircleIcon active={onBoarding === 3} />
          </CardFeedBackContainer>
          <CardTitle>{cardTitle}</CardTitle>
          {children}
          <SafeAreaView style={{ width: "100%" }}>
            <CardFooter>
              <Button
                text="Próximo"
                color={theme.colors.pistache}
                textColor={theme.colors.primary}
                onPress={handleNavigateNextScreen}
                width={"350"}
              />
              <BackButton onPress={handleNavigateGobackScreen}>
                <BackButtonText>{backButtonText}</BackButtonText>
              </BackButton>
            </CardFooter>
          </SafeAreaView>
        </CardContainer>
      </Container>
    </OverLay>
  );
}
