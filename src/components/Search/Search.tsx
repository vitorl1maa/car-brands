import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SearchProps } from "./types";
import { IconWrapper, InputField, SearchContainer } from "./styled";
import theme from "../../theme";

const Search = ({
  icon: Icon,
  placeholder,
  width,
  onPress,
  ...rest
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <SearchContainer isFocused={isFocused}>
      <InputField
        placeholder={placeholder}
        placeholderTextColor={theme.colors.softGray}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setSearch}
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
    </SearchContainer>
  );
};

export default Search;
