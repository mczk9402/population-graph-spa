export const API_URL = "https://opendata.resas-portal.go.jp";
export const API_KEY = process.env.NEXT_PUBLIC_RESAS_API_KEY;
export const API_VERSION = "api/v1";
export const API_ENDPOINT = {
  PREFECTURES: `${API_URL}/${API_VERSION}/prefectures`,
  POPULATION: `${API_URL}/${API_VERSION}/population/composition/perYear`,
};
