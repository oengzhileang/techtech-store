import { Avatar } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import Luffy from "@/assets/images/Luffy.jpg";
const AvatarAdmin = () => {
  return (
    <Avatar
      src={
        <img
          src={
            "https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small_2x/hairy-fluffy-cat-playing-png.png"
          }
          alt="avatar"
        />
      }
    />
  );
};

export default AvatarAdmin;
