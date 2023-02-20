import { PrefecturePopulationData } from "@/schemas/resas-api/population";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { Prefecture } from "@/schemas/resas-api/prefectures";
import { omitPrefectureSuffix } from "@/utils/prefectura";
import { API_ENDPOINT } from "@/configs/resas-api";
import { getPopulation } from "@/apis/resas-api";
import styles from "./styles.module.scss";
import useSWRMutation from "swr/mutation";

type Props = {
  setPrefecturePopulationData: Dispatch<
    SetStateAction<PrefecturePopulationData[]>
  >;
  setCategories: Dispatch<SetStateAction<string[]>>;
  prefecture: Prefecture;
};

export const PrefectureCheckbox: FC<Props> = ({
  prefecture,
  setPrefecturePopulationData,
  setCategories,
}) => {
  const prefectureName = omitPrefectureSuffix(prefecture.prefName);
  const prefectureCode = prefecture.prefCode;

  const { data, trigger, reset } = useSWRMutation(
    prefectureCode ? API_ENDPOINT.POPULATION : null,
    async () => {
      return getPopulation(prefectureCode);
    }
  );

  const handleClick = async () => {
    if (data === undefined) {
      await trigger();
    } else {
      reset();
    }
  };

  useEffect(() => {
    const totalPopulations = data?.data[0].data;

    setPrefecturePopulationData(
      (prev) =>
        totalPopulations?.map((totalPopulation, i) => ({
          ...prev[i],
          date: totalPopulation.year,
          [prefectureName]: totalPopulation.value,
        })) || prev
    );

    setCategories((prev) =>
      totalPopulations !== undefined
        ? [...prev, prefectureName]
        : prev.filter((category) => category !== prefectureName)
    );
  }, [data?.data, prefectureName, setCategories, setPrefecturePopulationData]);

  return (
    <label className={styles.label}>
      <input onChange={handleClick} type="checkbox" />
      <span className={styles.title}>{prefectureName}</span>
    </label>
  );
};
