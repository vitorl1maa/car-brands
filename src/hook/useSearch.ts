import { useState, useEffect, useRef } from "react";
import { getCars } from "../api/getCars/getCars";
import { useLoading } from "./useLoading";
import { Animated } from "react-native";

interface CarBrand {
  codigo: string;
  nome: string;
}

export const useCarBrands = () => {
  const [carBrands, setCarBrands] = useState<CarBrand[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, setLoading } = useLoading();
  const scrollY = useRef(new Animated.Value(0)).current;

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

  return {
    carBrands: filteredCarBrands,
    searchTerm,
    setSearchTerm,
    loading,
    scrollY,
  };
};