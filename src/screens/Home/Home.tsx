import React, { useState, useEffect, useRef } from "react";
import { Animated, View, StyleSheet, TouchableOpacity } from "react-native";
import { Container, ContainerLoading, ModelTitle } from "./styled";
import Navbar from "./components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import { Search as SearchIcon } from "lucide-react-native";
import CardInfo from "../../components/CardInfo/CardInfo";
import { getCars } from "../../api/getCars/getCars";
import Loading from "../../components/Loading/Loading";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { useLoading } from "../../hook/useLoading";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../@types/routes";

interface CarBrand {
  codigo: string;
  nome: string;
}

const Home = () => {
  const [carBrands, setCarBrands] = useState<CarBrand[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, setLoading } = useLoading();
  const scrollY = useRef(new Animated.Value(0)).current;

  type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Home"
  >;

  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    const fetchCarBrands = async () => {
      setLoading(true);
      try {
        const data = await getCars();
        const sortedData = data.sort(
          (a: CarBrand, b: CarBrand) => parseInt(a.codigo) - parseInt(b.codigo)
        );
        setCarBrands(sortedData);
      } catch (error) {
        console.error("Erro ao buscar marcas de carros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarBrands();
  }, [setLoading]);

  const filteredCarBrands = carBrands.filter(
    (car) =>
      car.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.codigo.includes(searchTerm)
  );

  const handlePress = (brandCode: string) => {
    navigation.navigate("CarModel", { brandCode });
  };

  const renderItem = ({ item, index }: { item: CarBrand; index: number }) => {
    const inputRange = [-1, 0, index * 100, (index + 2) * 100];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    return (
      <TouchableOpacity onPress={() => handlePress(item.codigo)}>
        <Animated.View
          style={[
            styles.card,
            {
              transform: [{ scale }],
              opacity,
            },
          ]}
        >
          <CardInfo car={item.nome} coding={item.codigo} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <Navbar />
      <Search
        icon={SearchIcon}
        placeholder="Buscar"
        setSearch={setSearchTerm}
      />

      <View style={{ marginTop: 40 }}>
        <ModelTitle>Marcas</ModelTitle>
        {loading ? (
          <ContainerLoading>
            <Loading color={theme.colors.pistache} />
          </ContainerLoading>
        ) : (
          <Animated.FlatList
            data={filteredCarBrands}
            keyExtractor={(item) => item.codigo}
            renderItem={renderItem}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            contentContainerStyle={{
              paddingTop: 20,
              paddingBottom: 100,
            }}
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 6,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default Home;
