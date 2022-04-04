import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import useChartsData from "./hooks/useChartsData";



export default function Chart2() {
          const [data ,setData] =useChartsData([])
         
  return (
    <ComposedChart
    width={500}
    height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="month" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
    </ComposedChart>
  );
}
