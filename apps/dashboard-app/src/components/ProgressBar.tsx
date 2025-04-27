import { Progress } from "antd";

const ProgressBar = () => {
  return (
    <Progress
      className="w-full "
      percent={60}
      percentPosition={{ align: "end", type: "inner" }}
      strokeColor="#0000FF"
      size={["", 20]}
    />
  );
};

export default ProgressBar;
