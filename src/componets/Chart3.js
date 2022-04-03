import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';



export default function Chart3() {
          const [data ,setData] =useState([])
          useEffect(()=>{
                    fetch('Data.json')
                    .then(res => res.json())
                    .then(data => setData(data))
          },[])
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="month" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="sell" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Radar name="revenue" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="investment" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      
      <Legend />
      <Tooltip></Tooltip>
    </RadarChart>
  );
}
