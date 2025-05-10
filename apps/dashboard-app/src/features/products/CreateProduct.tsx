// src/features/products/components/CreateProduct.tsx
import React from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  Upload,
  Button,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { IProducts } from "./types/Product.type";
interface CreateProductProps {
  visible: boolean;
  onOk: (newProduct: IProducts) => void;
  onCancel: () => void;
}

const CreateProduct: React.FC<CreateProductProps> = ({
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
        const formData = new FormData();
        formData.append("image", values.image[0].originFileObj);
        formData.append("model", values.model);
        formData.append("category", values.category);
        formData.append("price", values.price.toString());
        formData.append("stock", values.stock.toString());

        // Handle image file if uploaded
        const imageFile = values.image?.fileList?.[0]?.originFileObj;
        if (imageFile) {
          formData.append("image", imageFile);
        }

        try {
          const response = await axios.post(
            "http://localhost:3000/v1/products",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          const newProduct: IProducts = response.data.data;
          console.log("Api response:", response.data);
          message.success("Product created successfully");
          form.resetFields();
          onOk(newProduct); // Trigger parent callback to refresh or close modal
        } catch (error) {
          message.error("Failed to create product");
          console.error("Create product error:", error);
        }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Create New Product"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="Create"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="image"
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Upload
            name="image"
            listType="picture"
            maxCount={1}
            beforeUpload={() => false} // Prevent auto-upload
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="model"
          label="Model"
          rules={[{ required: true, message: "Please enter model" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select>
            <Select.Option value="Desktop">Desktop</Select.Option>
            <Select.Option value="Laptop">Laptop</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            { required: true, message: "Please enter price" },
            { type: "number", min: 0, message: "Price must be non-negative" },
          ]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="stock"
          label="Stock"
          rules={[
            { required: true, message: "Please enter stock quantity" },
            { type: "number", min: 0, message: "Stock must be non-negative" },
          ]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateProduct;
