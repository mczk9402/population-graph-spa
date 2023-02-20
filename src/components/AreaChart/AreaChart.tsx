import { AreaChart as TremorAreaChart } from "@tremor/react";
import React, { FC } from "react";

type Props = {
  data: any[];
  categories: string[];
};

export const AreaChart: FC<Props> = ({ data, categories }) => {
  return (
    <TremorAreaChart
      data={data}
      categories={categories}
      dataKey="date"
      yAxisWidth="w-16"
    />
  );
};
