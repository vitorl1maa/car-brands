import React, { useState, useEffect, useRef } from "react";
import { Animated, View, StyleSheet, TouchableOpacity } from "react-native";
import { Container, ContainerLoading, ModelTitle } from "./styled";
import Navbar from "../Home/components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import { Search as SearchIcon } from "lucide-react-native";
import CardInfo from "../../components/CardInfo/CardInfo";
import Loading from "../../components/Loading/Loading";
import theme from "../../theme";
import { useRoute } from "@react-navigation/native";
import { useLoading } from "../../hook/useLoading";
import { getCarModels } from "../../api/getCar[id]/getCarId";

interface CarModel {
  codigo: string;
  nome: string;
}

const CarModelScreen = () => {
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, setLoading } = useLoading();
  const scrollY = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const { brandCode } = route.params as { brandCode: string };

  useEffect(() => {
    const fetchCarModels = async () => {
      setLoading(true);
      try {
        const data = await getCarModels(brandCode);
        if (data && data.modelos) {
          const sortedData = data.modelos.sort(
            (a: CarModel, b: CarModel) =>
              parseInt(a.codigo) - parseInt(b.codigo)
          );
          setCarModels(sortedData);
        } else {
          console.error("Estrutura de dados inesperada:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar modelos de carros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarModels();
  }, [brandCode, setLoading]);

  const filteredCarModels = carModels.filter(
    (car) =>
      car.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (car.codigo && car.codigo.toString().includes(searchTerm))
  );

  const renderItem = ({ item, index }: { item: CarModel; index: number }) => {
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
        <ModelTitle>Modelos</ModelTitle>
        {loading ? (
          <ContainerLoading>
            <Loading color={theme.colors.pistache} />
          </ContainerLoading>
        ) : (
          <Animated.FlatList
            data={filteredCarModels}
            keyExtractor={(item) => item.codigo.toString()}
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

export default CarModelScreen;
