import { carListApi } from "../config";

export const getCarModels = async (brandCode: string) => {
  try {
    const response = await carListApi.get(`/marcas/${brandCode}/modelos`);
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar modelos de carros:", error);
    throw error;
  }
};