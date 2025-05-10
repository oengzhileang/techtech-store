import SearchBox from "@/components/SearchBox";
import CustomersList from "@/features/customers/CustomersList";
import { useState } from "react";
import CreateCustomer from "@/features/customers/CreateCustomer";
import { Button } from "antd";
const Customers = () => {
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
      <h1 className="text-xl font-semibold">Customers</h1>
      <div className="flex justify-between">
        <SearchBox placeholder="Search by id" />
        <Button type="primary" onClick={showModal}>
          Add Customer
        </Button>
        <CreateCustomer
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </div>
      <CustomersList />
    </div>
  );
};

export default Customers;
