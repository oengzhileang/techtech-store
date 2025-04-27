import React from "react";
import { Card } from "antd";
import ProgressBar from "../../components/ProgressBar";
interface SaleTargetCardProps {
  title: string;
  progressNumber: string;
  targetNumber: string;
}

const SaleTargetCard: React.FC<SaleTargetCardProps> = ({
  title,
  progressNumber,
  targetNumber,
}) => (
  <Card
    style={{
      padding: 0,
      borderRadius: 30,
      backgroundColor: "#e5e7eb",
    }}
  >
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500">In progress</p>
          <p className="text-xl font-semibold">${progressNumber}</p>
        </div>
        <div>
          <p className="text-gray-500">Sales target</p>
          <p className="text-xl font-semibold">${targetNumber}</p>
        </div>
      </div>
      <ProgressBar />
    </div>
  </Card>
);

export default SaleTargetCard;
