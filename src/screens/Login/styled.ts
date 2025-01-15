import styled from "styled-components/native";
import theme from "../../theme";
import { fontSize } from "../../utils/font-size-responsiveness";

export const Container = styled.View`
  min-width: 100%;
  flex: 1;
  background: ${theme.colors.primary};
  align-items: center;
  justify-content: center;

`
export const ContainerText = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5;
  

`

export const Title = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${fontSize(3)};
  text-align: center;
  font-family: ${theme.fonts.semiBold};
  margin-bottom: 20px;
  
`

export const TextDetail = styled.Text`
  color: ${theme.colors.pistache};

`