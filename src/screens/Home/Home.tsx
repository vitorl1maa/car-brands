import React, { useEffect, useState } from "react";
import { Container, ContainerLoading, ModelTitle } from "./styled";
import Navbar from "./components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import { Search as SearchIcon } from "lucide-react-native";
import CardInfo from "../../components/CardInfo/CardInfo";
import { FlatList, View } from "react-native";
import { getCars } from "../../api/getCars/getCars";
import { CardInfoProps } from "../../components/CardInfo/types";
import { useLoading } from "../../hook/useLoading";
import Loading from "../../components/Loading/Loading";
import theme from "../../theme";

interface CarBrand {
  codigo: string;
  nome: string;
}

const Home = () => {
  const [carBrands, setCarBrands] = useState<CarBrand[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, setLoading } = useLoading();

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
  }, []);

  const filteredCarBrands = carBrands.filter(
    (car) =>
      car.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.codigo.includes(searchTerm)
  );

  return (
    <Container>
      <Navbar />
      <Search
        icon={SearchIcon}
        placeholder="Buscar"
        setSearch={setSearchTerm}
      />

      <View style={{ marginTop: 40 }}>
        <ModelTitle>Models</ModelTitle>
        {loading ? (
          <ContainerLoading>
            <Loading color={theme.colors.pistache} />
          </ContainerLoading>
        ) : (
          <FlatList
            data={filteredCarBrands}
            keyExtractor={(item) => item.codigo}
            renderItem={({ item }) => (
              <CardInfo car={item.nome} coding={item.codigo} />
            )}
          />
        )}
      </View>
    </Container>
  );
};

export default Home;
