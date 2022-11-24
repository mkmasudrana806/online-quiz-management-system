import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statictics.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Statictics = () => {
  const statisticsData = useLoaderData();
  console.log(statisticsData);
  const { data } = statisticsData;
  console.log(data);
  return (
   <div className="quiz-statistics">
     <div >
      <h2>Quiz Statistics, topics Based</h2>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
   </div>
  );
};

export default Statictics;
