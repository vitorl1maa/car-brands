import React from "react";
import { View } from "react-native";
import { ButtonField, TextButton } from "./styled";
import { ButtonPropsDefault } from "./types";

const Button = ({
  text,
  width,
  color,
  textColor,
  disabled,
  ...rest
}: ButtonPropsDefault) => {
  return (
    <View>
      <ButtonField width={width} color={color} disabled={disabled} {...rest}>
        <TextButton textColor={textColor}>{text}</TextButton>
      </ButtonField>
    </View>
  );
};

export default Button;
