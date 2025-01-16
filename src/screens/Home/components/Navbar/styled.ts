import styled from "styled-components/native";
import { responsiveness } from "../../../../utils/size-responsiveness";
import { fontSize } from "../../../../utils/font-size-responsiveness";
import theme from "../../../../theme";
import { TouchableOpacityProps } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${responsiveness(6)}px 20px;

`;

export const WelcomeText = styled.Text`
  font-weight: 300;
  color: ${theme.colors.secondary};
  font-size: 18px;
`

export const TextName = styled.Text`
  font-weight: 600;
  font-size: ${fontSize(2.5)};
  color: ${theme.colors.secondary};

`

export const ContainerLogout = styled.TouchableOpacity<TouchableOpacityProps>`
  flex-direction: row;
  gap: 5;
  align-items: center;

`

export const LogoutText = styled.Text`
  color: ${theme.colors.pistache};
  font-weight: 600;
  font-size: 20px;
`