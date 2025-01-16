import { LucideProps } from "lucide-react-native";
import { ForwardRefExoticComponent } from "react";
import { TextInputProps } from "react-native";

export interface SearchProps extends TextInputProps {
  width?: string;
  placeholder: string;
  icon?: ForwardRefExoticComponent<LucideProps>;
  isFocused?: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}