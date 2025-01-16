import React from "react";
import { Container } from "./styled";
import Navbar from "./components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import { Search as SearchIcon } from "lucide-react-native";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Search icon={SearchIcon} placeholder="Buscar" setSearch={() => {}} />
    </Container>
  );
};

export default Home;
