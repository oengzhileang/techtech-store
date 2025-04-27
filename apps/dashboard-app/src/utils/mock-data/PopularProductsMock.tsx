// productColumns.ts
import { Tag, TableColumnsType } from "antd";
import macBookImage from "@/assets/images/mac_book.png";
import { ProductsType } from "@/features/products/types/Product.type";
export const columnsProductsMock: TableColumnsType<ProductsType> = [
  {
    title: "Id",
    dataIndex: "key",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image: string) =>
      image ? (
        <img src={image} alt="product" style={{ width: 50 }} />
      ) : (
        "No Image"
      ),
  },
  {
    title: "Product",
    dataIndex: "model",
    key: "model",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price ($)",
    dataIndex: "price",
    key: "price",
    render: (price) => `$${price.toFixed(2)}`,
  },

  {
    title: "Sales",
    dataIndex: "sales",
    key: "sales",
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => {
      // Compute status based on stock
      const stock = record.stock;
      let status = "in stock";
      let color = "green";

      if (stock === 0) {
        status = "out of stock";
        color = "red";
      } else if (stock <= 5) {
        status = "low stock";
        color = "orange";
      }

      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
];

export const PopularProductMock: ProductsType[] = [
  {
    key: "1",
    image: macBookImage,
    model: "MacBook Pro 14”",
    price: 1999.99,
    sales: 120,
    stock: 12,
    category: "Laptops",
  },
  {
    key: "2",
    image: macBookImage,
    model: "Gaming Laptop G15",
    price: 1499.99,
    sales: 80,
    stock: 2,
    category: "Laptops",
  },
  {
    key: "3",
    image: macBookImage,
    model: "HP Workstation Z2",
    price: 1199.99,
    sales: 45,
    stock: 0,
    category: "Desktops",
  },
  {
    key: "4",
    image: macBookImage,
    model: "Lenovo All-in-One",
    price: 899.99,
    sales: 33,
    stock: 5,
    category: "Desktops",
  },
  {
    key: "5",
    image: macBookImage,
    model: "Dell OptiPlex Tower",
    price: 749.99,
    sales: 60,
    stock: 8,
    category: "Desktops",
  },
];
