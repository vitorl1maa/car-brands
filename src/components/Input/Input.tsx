import React, { useState } from "react";
import { InputField, IconWrapper, InputContainer } from "./styled";
import theme from "../../theme";
import { InputPropsDefault } from "./types";
import { TouchableOpacity } from "react-native";

const Input = ({
  icon: Icon,
  placeholder,
  width,
  onPress,
  ...rest
}: InputPropsDefault) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer isFocused={isFocused}>
      <InputField
        placeholder={placeholder}
        placeholderTextColor={theme.colors.softGray}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        width={width}
        {...rest}
      />
      {Icon && (
        <IconWrapper>
          {
            <TouchableOpacity onPress={onPress}>
              <Icon
                size={25}
                color={
                  isFocused ? theme.colors.pistache : theme.colors.softGray
                }
              />
            </TouchableOpacity>
          }
        </IconWrapper>
      )}
    </InputContainer>
  );
};

export default Input;
