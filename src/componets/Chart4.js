import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";


export default function Chart4() {
          const [data ,setData] =useState([])
          useEffect(()=>{
                    fetch('Data.json')
                    .then(res => res.json())
                    .then(data => setData(data))
          },[])
  return (
    <AreaChart
      width={600}
      height={300}
      data={data}
      
//       margin={{
//         top: 10,
//         right: 30,
//         left: 0,
//         bottom: 0
//       }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="sell"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="investment"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="revenue"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}
