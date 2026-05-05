import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 800 }
];

function Chart() {
  return (
    <LineChart width={400} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" />
    </LineChart>
  );
}

export default Chart;