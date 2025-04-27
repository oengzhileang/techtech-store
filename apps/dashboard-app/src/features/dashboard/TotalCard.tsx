import React from "react";
import { RiseOutlined } from "@ant-design/icons";
import { Card } from "antd";

interface TotalCardProps {
  title: string;
  number: string;
}
const TotalCard: React.FC<TotalCardProps> = (props) => (
  <Card style={{ padding: 0, borderRadius: 30, backgroundColor: "#e5e7eb" }}>
    <div className="flex flex-col space-y-16">
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-slate-700">
          Total {props.title}
        </p>
        <RiseOutlined />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold text-blue-500">{props.number}</p>
        <div className="flex flex-col items-end">
          <div className="flex gap-x-1 items-center text-green-500">
            <RiseOutlined />
            <p>1.5</p>
          </div>
          <p>From last week</p>
        </div>
      </div>
    </div>
  </Card>
);

export default TotalCard;
