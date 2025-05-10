import React, { useEffect, useState } from "react";
import { Table, message, Space } from "antd";
import axios from "axios";
import { ICustomers } from "./types/Customers.types";
import type { GetProp, TableProps } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

type ColumnsType<T extends object = object> = TableProps<T>["columns"];
type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface TableParams {
  pagination?: TablePaginationConfig;
}

const columns: ColumnsType<ICustomers> = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
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

const CustomersList: React.FC = () => {
  const [customers, setCustomer] = useState<ICustomers[]>([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
      pageSizeOptions: ["5", "10", "20", "50", "100"],
      showSizeChanger: true, // Enable the page size changer dropdown
    },
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/v1/customers");
      console.log("API Response:", response.data);
      const data = response.data.data || response.data;
      const dataSource = Array.isArray(data) ? data : [];
      console.log("Data Source:", dataSource);
      setCustomer(dataSource);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: dataSource.length,
        },
      });
    } catch (error) {
      console.error("Fetch products error:", error);
      message.error("Failed to fetch products");
      setCustomer([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);

  const handleTableChange: TableProps<ICustomers>["onChange"] = (
    pagination
  ) => {
    setTableParams({
      pagination: {
        ...pagination,
        pageSizeOptions: ["5", "10", "20", "50", "100"], // Ensure options persist
        showSizeChanger: true,
      },
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setCustomer([]);
    }
  };

  return (
    <div>
      <Table<ICustomers>
        columns={columns}
        dataSource={customers}
        rowKey="_id"
        loading={loading}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default CustomersList;
