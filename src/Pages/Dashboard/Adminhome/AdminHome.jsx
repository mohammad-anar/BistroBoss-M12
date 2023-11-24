// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import { FaSwatchbook } from "react-icons/fa";

// bar chart data
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: statData = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  console.log(chartData);
  //---------------------------------------------------------
  // pichart data
  const pichartData = chartData?.map((item) => {
    return { name: item.category, value: item.revenue };
  });
  // custom function for pi chart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // -------------------------------------------------------
  return (
    <div>
      <SectionHeading
        subTitle={"Welcome Back!"}
        title={"Admin Home"}
      ></SectionHeading>
      {/* stats here ----------------------------------------- */}
      <div className="stats shadow">
        <div className="stat place-items-center p-20 flex items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
          <div className="text-white">
            <FaSwatchbook size={30}></FaSwatchbook>
          </div>
          <div className="stat-title text-xl font-bold text-white">
            <h2>Revenue</h2>
            <h2>$ {statData?.revenue}</h2>
          </div>
        </div>
        <div className="stat place-items-center flex items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
          <div className="text-white">
            <FaSwatchbook size={25}></FaSwatchbook>
          </div>
          <div className="stat-title text-xl font-bold text-white">
            <h2>Customer</h2>
            <h2>{statData?.users}</h2>
          </div>
        </div>
        <div className="stat place-items-center flex items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
          <div className="text-white">
            <FaSwatchbook size={25}></FaSwatchbook>
          </div>
          <div className="stat-title text-xl font-bold text-white">
            <h2>Products</h2>
            <h2>{statData?.products}</h2>
          </div>
        </div>
        <div className="stat place-items-center flex items-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
          <div className="text-white">
            <FaSwatchbook size={25}></FaSwatchbook>
          </div>
          <div className="stat-title text-xl font-bold text-white">
            <h2>Orders</h2>
            <h2>{statData?.orders}</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Bar
            dataKey="quantity"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {chartData?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 6]} />
            ))}
          </Bar>
        </BarChart>
          <PieChart width={400} height={400}>
            <Pie
              data={pichartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {pichartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
      </div>
    </div>
  );
};

export default AdminHome;
