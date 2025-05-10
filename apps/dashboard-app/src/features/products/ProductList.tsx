// src/features/products/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag, message, Image } from "antd";
import type { GetProp, TableProps } from "antd";
import axios from "axios";
import { IProducts } from "./types/Product.type";
import { useParams } from "react-router-dom";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import ViewProductModal from "./ViewProductsModal";
import DeleteProductModal from "./DeleteProducts";
import CreateProduct from "./CreateProduct"; // Import CreateProduct

type ColumnsType<T extends object = object> = TableProps<T>["columns"];
type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface TableParams {
  pagination?: TablePaginationConfig;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(false);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false); // State for create modal
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(
    null
  );
  const { category } = useParams<{ category: string }>();
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
      pageSizeOptions: ["5", "10", "20", "50", "100"],
      showSizeChanger: true,
    },
  });

  const categoryMap: { [key: string]: "Desktop" | "Laptop" } = {
    desktops: "Desktop",
    laptops: "Laptop",
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const actualCategory = category
        ? categoryMap[category.toLowerCase()]
        : null;
      const response = await axios.get("http://localhost:3000/v1/products", {
        params: actualCategory ? { category: actualCategory } : {},
      });

      const data = response.data.data || response.data;
      const dataSource = Array.isArray(data) ? data : [];
      setProducts(dataSource);
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
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [
    category,
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
  ]);

  const handleTableChange: TableProps<IProducts>["onChange"] = (pagination) => {
    setTableParams({
      pagination: {
        ...pagination,
        pageSizeOptions: ["5", "10", "20", "50", "100"],
        showSizeChanger: true,
      },
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setProducts([]);
    }
  };

  // Handle new product creation
  const handleCreateProduct = (newProduct: IProducts) => {
    setProducts((prevProducts) => {
      // Only add the product if it matches the current category (if filtered)
      const actualCategory = category
        ? categoryMap[category.toLowerCase()]
        : null;
      if (actualCategory && newProduct.category !== actualCategory) {
        return prevProducts; // Don't add if category doesn't match
      }
      return [newProduct, ...prevProducts]; // Add new product to the top
    });
    setCreateModalVisible(false); // Close the modal
  };

  const columns: ColumnsType<IProducts> = [
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
      dataIndex: "stock",
      key: "status",
      render: (stock: number) => {
        let status = "in stock";
        let color = "green";
        if (stock === 0) {
          status = "out of stock";
          color = "red";
        } else if (stock <= 10) {
          status = "low stock";
          color = "orange";
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: IProducts) => (
        <Space size="small">
          <Button
            type="link"
            onClick={() => {
              setSelectedProduct(record);
              setViewModalVisible(true);
            }}
          >
            <EyeOutlined />
          </Button>
          <Button type="link" onClick={() => console.log("Edit", record._id)}>
            <EditOutlined />
          </Button>
          <Button
            type="link"
            onClick={() => {
              setSelectedProduct(record);
              setDeleteModalVisible(true);
            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setCreateModalVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Create New Product
      </Button>
      <Table<IProducts>
        columns={columns}
        dataSource={products}
        rowKey="_id"
        loading={loading}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
      />
      <ViewProductModal
        visible={viewModalVisible}
        product={selectedProduct}
        onClose={() => {
          setViewModalVisible(false);
          setSelectedProduct(null);
        }}
      />
      <DeleteProductModal
        visible={deleteModalVisible}
        product={selectedProduct}
        onClose={() => {
          setDeleteModalVisible(false);
          setSelectedProduct(null);
        }}
        onDeleteSuccess={fetchProducts}
      />
      <CreateProduct
        visible={createModalVisible}
        onOk={handleCreateProduct}
        onCancel={() => setCreateModalVisible(false)}
      />
    </div>
  );
};

export default ProductList;
