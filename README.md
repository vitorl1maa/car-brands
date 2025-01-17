# Car Brands

Este é um projeto React Native que exibe uma lista de marcas de carros e seus modelos. O projeto utiliza a biblioteca `react-navigation` para navegação entre telas e `axios` para fazer chamadas à API.

## Estrutura do Projeto

- **src**
  - **api**: Contém as funções para fazer chamadas à API.
  - **components**: Componentes reutilizáveis.
  - **hooks**: Hooks personalizados.
  - **screens**: Telas do aplicativo.
  - **theme**: Configurações de tema.
  - **utils**: Funções utilitárias.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/car-brands.git
   cd car-brands
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Instale as dependências específicas do projeto:

   ```bash
   yarn add @react-navigation/native @react-navigation/stack axios styled-components
   yarn add --dev jest @testing-library/react-native @testing-library/jest-native jest-expo ts-jest @types/jest ts-node
   ```

## Executando o Projeto

Para iniciar o projeto, execute:

```bash
yarn start
```

Para rodar no Android:

```bash
yarn android
```

Para rodar no iOS:

```bash
yarn ios
```

Para rodar na web:

```bash
yarn web
```

## Testes

Para executar os testes, adicione o script de teste no 

package.json

:

```json
"scripts": {
  "test": "jest"
}
```

E então execute:

```bash
yarn test
```

## Estrutura das Telas

### Home

A tela `Home` exibe uma lista de marcas de carros. Ao clicar em uma marca, o usuário é levado para a tela `CarModel`.

### CarModel

A tela `CarModel` exibe uma lista de modelos de carros para a marca selecionada. O usuário pode voltar para a tela `Home` clicando no ícone de voltar.

## Exemplos de Código

### Função `getCars`

```typescript
import axios from "axios";

const API_URL = "https://sua-api-url.com";

export const getCars = async () => {
  try {
    const response = await axios.get(`${API_URL}/marcas`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar marcas de carros:", error);
    throw error;
  }
};
```

### Componente `CarModelScreen`

```tsx
import React, { useState, useEffect, useRef } from "react";
import { Animated, View, StyleSheet, TouchableOpacity } from "react-native";
import { Container, ContainerLoading, ModelTitle } from "./styled";
import Navbar from "../Home/components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import { ArrowLeft, Search as SearchIcon } from "lucide-react-native";
import CardInfo from "../../components/CardInfo/CardInfo";
import Loading from "../../components/Loading/Loading";
import theme from "../../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLoading } from "../../hooks/useLoading";
import { getCarModels } from "../../api/getCar/getCar";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../@types/routes";

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

  type CarModelScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "CarModel"
  >;

  const navigation = useNavigation<CarModelScreenNavigationProp>();

  const handleBackPress = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    const fetchCarModels = async () => {
      setLoading(true);
      try {
        const data = await getCarModels(brandCode);
        if (data && data.modelos) {
          const sortedData = data.modelos.sort(
            (a: CarModel, b: CarModel) => parseInt(a.codigo) - parseInt(b.codigo)
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
      <TouchableOpacity onPress={handleBackPress} testID="back-button">
        <ArrowLeft
          color={theme.colors.pistache}
          size={32}
          style={{ marginBottom: 20 }}
        />
      </TouchableOpacity>
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
```

## Contribuição

Se você quiser contribuir para este projeto, por favor, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
