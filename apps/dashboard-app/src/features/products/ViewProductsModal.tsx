import React from "react";
import { Modal, Descriptions, Image, Tag } from "antd";
import { IProducts } from "./types/Product.type";

interface ViewProductModalProps {
  visible: boolean;
  product: IProducts | null;
  onClose: () => void;
}

const ViewProductModal: React.FC<ViewProductModalProps> = ({
  visible,
  product,
  onClose,
}) => {
  if (!product) return null;

  const getStatusTag = (stock: number) => {
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
  };

  return (
    <Modal
      title={`Product Details - ${product.model}`}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Image">
          {product.image ? (
            <Image src={product.image} width={100} preview />
          ) : (
            "No Image"
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Model">{product.model}</Descriptions.Item>
        <Descriptions.Item label="Category">
          {product.category}
        </Descriptions.Item>
        <Descriptions.Item label="Price">
          ${product.price.toFixed(2)}
        </Descriptions.Item>
        <Descriptions.Item label="Stock">{product.stock}</Descriptions.Item>
        <Descriptions.Item label="Status">
          {getStatusTag(product.stock)}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ViewProductModal;
