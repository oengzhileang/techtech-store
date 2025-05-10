import React from "react";
import { Modal, Form, Input, message } from "antd";
import axios from "axios";
import { ICustomers } from "./types/Customers.types";
interface CreateCustomerProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const CreateCustomer: React.FC<CreateCustomerProps> = ({
  visible,
  onOk,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        console.log("Form values:", values);
        try {
          const response = await axios.post<ICustomers>(
            "http://localhost:3001/v1/customers",
            values,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("API response:", response.data);
          message.success("Customer created successfully");
          form.resetFields();
          onOk(); // Trigger parent callback to refresh or close modal
        } catch (error) {
          message.error("Failed to create customer");
          console.error("Create customer error:", error);
        }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Create New Customer"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="Create"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical" name="create_customer">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter customer name" }]}
        >
          <Input placeholder="Enter customer name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please enter phone number" }]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Please enter address" }]}
        >
          <Input placeholder="Enter address" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCustomer;
