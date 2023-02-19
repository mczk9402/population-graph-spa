import { PopulationResponse } from "@/schemas/resas-api/population";
import { PrefecturesResponse } from "@/schemas/resas-api/prefectures";
import { API_ENDPOINT, API_KEY } from "@/configs/resas-api";

const fetcher = async (endpoint: string) => {
  return await fetch(endpoint, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
};

export const getPrefectures = async () => {
  const response = await fetcher(`${API_ENDPOINT.PREFECTURES}`);

  const data: PrefecturesResponse = await response.json();

  return data.result;
};

export const getPopulation = async (prefCode: number) => {
  const response = await fetcher(
    `${API_ENDPOINT.POPULATION}?prefCode=${prefCode}&cityCode=-`
  );

  const data: PopulationResponse = await response.json();

  return data.result;
};
