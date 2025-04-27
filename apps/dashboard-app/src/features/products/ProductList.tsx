// src/features/products/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import { Table, Image, Button, message, Tag, Space } from "antd";
import axios from "axios";
import { ProductsType } from "./types/Product.type";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/v1/products");
      const data = response.data.data || response.data;
      const dataSource = Array.isArray(data) ? data : [];
      setProducts(dataSource);
    } catch (error) {
      console.error("Fetch products error:", error);
      message.error("Failed to fetch products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("Data from fetch", products);
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) =>
        image ? (
          <Image src={`http://localhost:3000${image}`} width={50} />
        ) : (
          "No Image"
        ),
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
      render: (_: any, record: ProductsType) => (
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

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="_id"
      // bordered
      loading={loading}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default ProductList;
