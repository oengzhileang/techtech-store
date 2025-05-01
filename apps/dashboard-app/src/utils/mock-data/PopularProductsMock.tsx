// productColumns.ts
import { Tag, TableColumnsType } from "antd";
import macBookImage from "@/assets/images/mac_book.png";
import { ProductsType } from "@/utils/types/Product.type";
export const columnsProductsMock: TableColumnsType<ProductsType> = [
  {
    title: "Id",
    dataIndex: "_id",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image: string) =>
      image ? (
        <img src={image} alt="product" style={{ width: 40 }} />
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
    _id: "1",
    image: macBookImage,
    model: "MacBook Pro 14”",
    price: 1999.99,
    stock: 12,
    sales: 120,
    category: "Laptop",
    status: "in stock",
  },
  {
    _id: "2",
    image: macBookImage,
    model: "Gaming Laptop G15",
    price: 1499.99,
    stock: 2,
    sales: 80,
    category: "Laptop",
    status: "low stock",
  },
  {
    _id: "3",
    image: macBookImage,
    model: "HP Workstation Z2",
    price: 1199.99,
    stock: 0,
    sales: 45,
    category: "Desktop",
    status: "out of stock",
  },
  {
    _id: "4",
    image: macBookImage,
    model: "Lenovo All-in-One",
    price: 899.99,
    stock: 5,
    sales: 33,
    category: "Desktop",
    status: "in stock",
  },
  {
    _id: "5",
    image: macBookImage,
    model: "Dell OptiPlex Tower",
    price: 749.99,
    stock: 8,
    sales: 60,
    category: "Desktop",
    status: "in stock",
  },
];
