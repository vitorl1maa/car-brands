import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import { useUserContext } from "../../context/UserContext";

const Home = () => {
  const { user } = useUserContext();

  console.log(user);

  return (
    <Container>
      <Text style={{ color: "#ffff", marginTop: 50, marginLeft: 50 }}>
        {user?.name}
      </Text>
    </Container>
  );
};

export default Home;
