import styled from "styled-components/native";
import { responsiveness } from "../../../utils/size-responsiveness";
import theme from "../../../theme";

export const Container = styled.View`
  max-width: 100%;
  gap: 20px;
  padding: ${responsiveness(2)}px;
  background-color: ${theme.colors.primary};
  
`;

export const LoginButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 20px;


`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.gray};

`;

export const ErrorText = styled.Text`
  color: #f56565;
  font-family: ${theme.fonts.semiBold};
  margin-top: 10px;
`