import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ heading, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="heading">{heading}</h3>

      <ResponsiveContainer className="graph" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#0b0b0b " />
          {/* <YAxis dataKey="au" stroke="#0b0b0b " /> */}
          <Line type="monotone" dataKey={dataKey} stroke="rgb(12, 113, 180)" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e4e4e4" strokeDasharray="5 5" />}
          {/* <Legend /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
