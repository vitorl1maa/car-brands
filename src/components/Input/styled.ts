import styled from "styled-components/native";
import theme from "../../theme";
import { fontSize } from "../../utils/font-size-responsiveness";
import { InputPropsDefault } from "./types";

// Outline effect
export const InputContainer = styled.View<{ isFocused: boolean; width?: string }>`
  min-width: ${(props: InputPropsDefault) => props.width || "100%"};
  border-width: 1px;
  border-color: ${(props: InputPropsDefault) =>
    props.isFocused ? theme.colors.pistache : theme.colors.gray};
  border-radius: 10px;
  padding: 0 10px;
  position: relative;
  background-color: ${theme.colors.gray};
`;


export const InputField = styled.TextInput`
  width: 100%;
  height: 50px;
  color: ${theme.colors.secondary};
  font-size: ${fontSize(1.3)};
 
`;

// Wrapper icon
export const IconWrapper = styled.View`
  position: absolute;
  top: 15px;
  right: 10px;
`;
