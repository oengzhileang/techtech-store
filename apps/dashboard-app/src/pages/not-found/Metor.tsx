import React from "react";

interface MeteorProps {
  className?: string;
  delay?: number;
}

const Meteor: React.FC<MeteorProps> = ({ className = "", delay = 0 }) => {
  return (
    <div
      className={`h-0.5 w-0.5 bg-white rounded-full shadow-lg animate-meteor ${className}`}
      style={{
        animationDelay: `${delay}s`,
        boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.6)",
        // Create a trail effect with gradient
        background:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
        width: "100px",
        transform: "rotate(-45deg)",
        animationIterationCount: "infinite",
      }}
    />
  );
};

export default Meteor;
