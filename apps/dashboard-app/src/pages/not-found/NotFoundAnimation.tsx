import React, { useState, useEffect } from "react";
import {
  SearchOutlined,
  WifiOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";

const NotFoundAnimation: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [SearchOutlined, WifiOutlined, FileExcelOutlined];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const Icon = icons[currentIcon];

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Animated circle */}
      <div className="absolute h-48 w-48 bg-primary-100 rounded-full animate-pulse-slow" />

      {/* Secondary circle with shadow */}
      <div className="absolute h-40 w-40 bg-white rounded-full shadow-md" />

      {/* Icon with animation */}
      <div className="relative animate-float">
        <Icon style={{ fontSize: "80px" }} className="text-blue-600" />
      </div>

      {/* Decorative elements */}
      <div className="absolute h-4 w-4 bg-accent-400 rounded-full top-10 right-16 animate-pulse" />
      <div
        className="absolute h-3 w-3 bg-primary-300 rounded-full bottom-14 left-20 animate-ping"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute h-6 w-6 border-2 border-primary-200 rounded-full bottom-24 right-24 animate-pulse"
        style={{ animationDuration: "4s" }}
      />
    </div>
  );
};

export default NotFoundAnimation;
