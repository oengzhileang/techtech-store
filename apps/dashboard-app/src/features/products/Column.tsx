import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Image, Space, Tag } from "antd";
import { ProductsType } from "../../utils/types/Product.type";
export const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image: string) =>
      image ? <Image src={`${image}`} width={40} /> : "No Image",
  },
  {
    title: "Model",
    dataIndex: "model",
    key: "model",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price: number) => `$${price.toFixed(2)}`,
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color = "green";
      if (status === "low stock") color = "orange";
      else if (status === "out of stock") color = "red";
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_: unknown, record: ProductsType) => (
      <Space size="small">
        <Button type="link" onClick={() => console.log("View", record._id)}>
          <EyeOutlined />
        </Button>
        <Button type="link" onClick={() => console.log("Edit", record._id)}>
          <EditOutlined />
        </Button>
        <Button type="link" onClick={() => console.log("Delete", record._id)}>
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];
