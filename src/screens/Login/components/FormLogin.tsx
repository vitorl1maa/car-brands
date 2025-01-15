import theme from "../../../theme";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Eye, EyeOff, User } from "lucide-react-native";
import { View } from "react-native";
import { Container, ErrorText } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../../@types/routes";
import { Controller, useForm } from "react-hook-form";
import { useAuthContext } from "../../../context/AuthContext";
import Loading from "../../../components/Loading/Loading";
import { useLoading } from "../../../hook/useLoading";
interface FormData {
  user: string;
  password: string;
}

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { isSignedIn, signIn, errorMessage } = useAuthContext();
  const { loading, setLoading } = useLoading();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleLogin = async (data: FormData) => {
    try {
      setLoading(true);
      const { user, password } = data;
      const success = await signIn(user, password);

      if (success) {
        navigation.replace("Home");
      } else {
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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

      <Button
        text={loading ? <Loading /> : "Entrar"}
        onPress={handleSubmit(handleLogin)}
        disabled={loading}
      />
    </Container>
  );
};

export default FormLogin;
