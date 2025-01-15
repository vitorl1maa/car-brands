import theme from "../../../theme";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Eye, EyeOff, User } from "lucide-react-native";
import { Text, View } from "react-native";
import { Container, ErrorText } from "./styled";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../../@types/routes";
import { Controller, useForm } from "react-hook-form";
import { useAuthContext } from "../../../context/AuthContext";
interface FormData {
  user: string;
  password: string;
}

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { isSignedIn, signIn, errorMessage } = useAuthContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleLogin = async (data: FormData) => {
    try {
      const { user, password } = data;
      const success = await signIn(user, password);

      if (success) {
        navigation.replace("Home");
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (isSignedIn) {
      navigation.replace("Home");
    }
  }, [isSignedIn]);

  return (
    <Container>
      <View>
        <Controller
          control={control}
          name="user"
          rules={{ required: "Usuário é obrigatório" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={User}
              placeholder="Usuário"
              autoCapitalize="none"
              cursorColor={theme.colors.pistache}
              keyboardType="default"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.user && <ErrorText>{errors.user.message}</ErrorText>}
      </View>

      <View>
        <Controller
          control={control}
          name="password"
          rules={{ required: "Senha é obrigatória" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onPress={() => setShowPassword(!showPassword)}
              icon={showPassword ? EyeOff : Eye}
              placeholder="Senha"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </View>

      <Button text="Entrar" onPress={handleSubmit(handleLogin)} />
    </Container>
  );
};

export default FormLogin;
