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
} from "recharts";
const Statictics = () => {
  const statisticsData = useLoaderData();
  const { data } = statisticsData;
  return (
    <div className="quiz-statistics">
      <div>
        <h2>Quiz Statistics, topics Based</h2>
        <AreaChart
          className="chart-area"
          width={450}
          height={350}
          data={data}
          margin={{
            top: 10,
            right: 50,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="red" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statictics;
