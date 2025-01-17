export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
  CarModel: { brandCode: string }
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const navigation = useNavigation<LoginScreenNavigationProp>();