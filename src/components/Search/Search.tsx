import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SearchProps } from "./types";
import { IconWrapper, InputField, SearchContainer } from "./styled";
import theme from "../../theme";
import { SearchIcon } from "lucide-react-native";

const Search = ({
  icon: Icon,
  placeholder,
  width,
  onPress,
  setSearch,
  ...rest
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearchLocal] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchLocal(text);
    setSearch(text);
  };

  return (
    <SearchContainer isFocused={isFocused}>
      <IconWrapper>
        <SearchIcon color={theme.colors.softGray} />
      </IconWrapper>
      <InputField
        placeholder={placeholder}
        placeholderTextColor={theme.colors.softGray}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={handleSearchChange}
        width={width}
        {...rest}
      />
    </SearchContainer>
  );
};

export default Search;
