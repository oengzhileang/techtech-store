import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import Luffy from "@/assets/images/Luffy.jpg";
const AvatarAdmin = () => {
  return (
    <Avatar shape="square" icon={<UserOutlined />} alt="avatar" size={35} />
  );
};

export default AvatarAdmin;
