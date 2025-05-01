// src/features/products/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import axios from "axios";
import { ProductsType } from "../../utils/types/Product.type";
import { columns } from "./Column";
import { useParams } from "react-router-dom";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams<{ category: string }>(); // Extract category from URL

  // Map URL category to actual category
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

      console.log("API Response:", response.data);
      const data = response.data.data || response.data;
      const dataSource = Array.isArray(data) ? data : [];
      console.log("Data Source:", dataSource);
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
  }, [category]); // Re-fetch when category changes

  // Log products state after it updates
  // useEffect(() => {
  //   console.log("Updated Products State:", products);
  // }, [products]);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="_id"
        // bordered
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ProductList;
