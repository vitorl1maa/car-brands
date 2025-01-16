import styled from "styled-components/native";
import theme from "../../theme";
import { SearchProps } from "./types";
import { fontSize } from "../../utils/font-size-responsiveness";

export const SearchContainer = styled.View`
  min-width: ${(props: SearchProps) => props.width || "100%"};
  background-color: ${theme.colors.gray};
  color: ${theme.colors.secondary};
  border-width: 1px;
  padding: 0 10px;
  position: relative;
  border-radius: 10px;
  border-color: ${(props: SearchProps) =>
    props.isFocused ? theme.colors.pistache : theme.colors.gray};
`;

export const InputField = styled.TextInput`
  width: 100%;
  height: 50px;
  color: ${theme.colors.secondary};
  font-size: ${fontSize(1.3)};
  margin-left: 25px;
 
`;

export const IconWrapper = styled.View`
  position: absolute;
  top: 13px;
  left: 8px;
 
`;