import "styled-components/native";
import theme from "../components/ui/theme";

type ThemeProps = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeProps { }
}