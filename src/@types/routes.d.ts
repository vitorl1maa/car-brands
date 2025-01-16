export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const navigation = useNavigation<LoginScreenNavigationProp>();