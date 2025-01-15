import { View, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import { LoaderCircle } from "lucide-react-native";
import theme from "../../theme";

export default function Loading() {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <LoaderCircle color={theme.colors.primary} />
    </Animated.View>
  );
}
