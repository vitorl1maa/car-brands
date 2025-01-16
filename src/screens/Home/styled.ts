import styled from "styled-components/native";
import theme from "../../theme";
import { responsiveness } from "../../utils/size-responsiveness";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${theme.colors.primary};
    padding: ${responsiveness(6)}px 20px;

`