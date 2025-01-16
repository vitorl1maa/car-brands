import styled from "styled-components/native";
import { CardInfoProps } from "./types";
import theme from "../../theme";
import { responsiveness } from "../../utils/size-responsiveness";

export const Container = styled.View`
  min-width: ${(props: CardInfoProps) => props.width || "100%"};
  height:${responsiveness(6)}px ;
  border-width: 1px;
  border-color: ${(props: CardInfoProps) =>
    props.isFocused ? theme.colors.pistache : theme.colors.gray};
  border-radius: 10px;
  margin-top: 15px;
  background-color: ${theme.colors.gray};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
`;

export const Info = styled.View`
  flex-direction: row;
  gap: 3;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.secondary};
  font-weight: 300;
  font-size: 16px;

`

export const TextCard = styled.Text`
  color: ${theme.colors.pistache};
  font-weight: 600;
  font-size: 16px;
`;