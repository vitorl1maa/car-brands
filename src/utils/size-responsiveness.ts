import { Dimensions } from "react-native";

const { height } = Dimensions.get("screen")
export const responsiveness = (size: number) => (height * 0.014) * size;