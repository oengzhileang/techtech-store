import LineChart from "@/components/LineChart";
import { Card } from "antd";

const SaleThisYearCard = () => {
  return (
    <Card
      style={{
        padding: 0,
        borderRadius: 30,
        backgroundColor: "#e5e7eb",
      }}
    >
      <h1>Sale this year</h1>
      <LineChart />
    </Card>
  );
};

export default SaleThisYearCard;
