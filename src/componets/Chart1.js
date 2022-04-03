import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



export default function Chart1() {
          const [data ,setData] =useState([])
          useEffect(()=>{
                    fetch('Data.json')
                    .then(res => res.json())
                    .then(data => setData(data))
          },[])
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" fill="#8884d8" />
      <Bar dataKey="revenue" fill="#82ca9d" />
      <Bar dataKey="sell" fill="#CC3333" />
      
    </BarChart>
  );
}
