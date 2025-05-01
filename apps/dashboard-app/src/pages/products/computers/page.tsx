import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import { Button } from "antd";
import CreateProduct from "@/features/products/CreateProduct";
import ProductList from "@/features/products/ProductList";
const Products = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Optionally trigger a refresh of the product list here
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Desktops</h1>
      <div className="flex justify-between">
        <SearchBox placeholder="Search by model" />
        <Button
          type="primary"
          onClick={showModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </Button>
      </div>
      <CreateProduct
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <ProductList />
    </div>
  );
};

export default Products;
