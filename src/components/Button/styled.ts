import styled from "styled-components/native";
import theme from "../../theme";
import { fontSize } from "../../utils/font-size-responsiveness";
import { ButtonPropsDefault } from "./types";


export const ButtonField = styled.TouchableOpacity<ButtonPropsDefault>`
  min-width: ${(props: ButtonPropsDefault) => props.width || "100%"};
  height: 50px;
  border-radius: 10px;
  background-color: ${(props: ButtonPropsDefault) => props.color || theme.colors.pistache};
  justify-content: center;
  align-items: center;
  
`;

export const TextButton = styled.Text`
  color: ${(props: ButtonPropsDefault) => props.textColor || theme.colors.primary};
  font-size: ${fontSize(1.3)}px;
  font-weight: normal;
  font-family: ${theme.fonts.semiBold};
  
`;