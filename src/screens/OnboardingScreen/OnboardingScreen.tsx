import React from "react";
import { CardText, ContainerText, OverLay } from "./styles";
import vehicleSale from "../../../assets/onboarding/Vehicle-sale-bro.png";
import frontCar from "../../../assets/onboarding/Front-car-amico.png";
import carRental from "../../../assets/onboarding/Car-rental-rafiki.png";
import { OnBoarding } from "../../components/Onboarding/Onboarding";
import { useOnBoardingContext } from "../../context/OnBoardingContext";

export default function OnboardingScreen() {
  const { onBoarding } = useOnBoardingContext();

  return (
    <OverLay>
      {onBoarding === 1 ? (
        <OnBoarding imgPath={vehicleSale}>
          <ContainerText>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sed
              enim reprehenderit porro corporis repellendus fugit delectus est
              nihil.
            </CardText>
          </ContainerText>
        </OnBoarding>
      ) : onBoarding === 2 ? (
        <OnBoarding imgPath={frontCar}>
          <ContainerText>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sed
              enim reprehenderit porro corporis repellendus fugit delectus est
              nihil.
            </CardText>
          </ContainerText>
        </OnBoarding>
      ) : (
        onBoarding === 3 && (
          <OnBoarding imgPath={carRental}>
            <ContainerText>
              <CardText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                sed enim reprehenderit porro corporis repellendus fugit delectus
                est nihil.
              </CardText>
            </ContainerText>
          </OnBoarding>
        )
      )}
    </OverLay>
  );
}
