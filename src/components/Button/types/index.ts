import { LucideProps } from "lucide-react-native";
import { ForwardRefExoticComponent } from "react";
import { TouchableOpacityProps } from "react-native";

export interface ButtonPropsDefault extends TouchableOpacityProps {
  text: string;
  width?: string;
  color?: string;
  textColor?: string;
  icon?: ForwardRefExoticComponent<LucideProps>;
}
