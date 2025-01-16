import { carListApi } from "../config"

export const getCars = async () => {
  try {
    const response = await carListApi.get("/marcas");
    return response.data
  } catch (error) {
    console.log("Erro ao buscar  carros:", error);
    throw error;
  }
};