export interface PopulationResponse {
  message: null;
  result: PopulationData;
}

export interface PopulationData {
  boundaryYear: number;
  data: AgeRange[];
}

export interface AgeRange {
  label: string;
  data: PopulationByYear[];
}

export interface PopulationByYear {
  year: number;
  value: number;
  rate?: number;
}

export interface PrefecturePopulationData {
  data: number;
  [key: string]: number;
}
