"use client";


import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "enero",
    visit: 4,
    click: 2400,
  },
  {
    name: "feb",
    visit: 3,
    click: 1398,
  },
  {
    name: "mar",
    visit: 3,
    click: 3800,
  },
  {
    name: "abril",
    visit: 5,
    click: 3908,
  },
 
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>cantidad de caches de  bryan - adribell</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;