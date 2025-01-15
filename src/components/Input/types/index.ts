import { LucideProps } from "lucide-react-native"
import { ForwardRefExoticComponent } from "react"
import { TextInputProps } from "react-native";

export interface InputPropsDefault extends TextInputProps {
  width?: string
  icon?: ForwardRefExoticComponent<LucideProps>;
  isFocused?: boolean

}