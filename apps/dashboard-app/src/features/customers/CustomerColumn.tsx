import { Space, TableColumnsType } from "antd";
import { CustomerTypes } from "./types/Customers.types";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
export const Customerscolumns: TableColumnsType<CustomerTypes> = [
  {
    title: "Id",
    key: "id",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>
          <EyeOutlined />
        </a>
        <a>
          <EditOutlined />
        </a>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];
