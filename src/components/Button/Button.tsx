import React from "react";
import { View } from "react-native";
import { ButtonField, TextButton } from "./styled";
import { ButtonPropsDefault } from "./types";

const Button = ({
  text,
  width,
  color,
  textColor,
  ...rest
}: ButtonPropsDefault) => {
  return (
    <View>
      <ButtonField width={width} color={color} {...rest}>
        <TextButton textColor={textColor}>{text}</TextButton>
      </ButtonField>
    </View>
  );
};

export default Button;
