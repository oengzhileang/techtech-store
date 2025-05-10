// src/features/products/types/Product.type.ts
export interface IProducts {
  _id?: string;
  image?: string;
  model: string;
  category: "Desktop" | "Laptop";
  price: number;
  stock: number;
  sales?: number;
  status: "in stock" | "low stock" | "out of stock";
  createdAt?: string;
  updatedAt?: string;
}
