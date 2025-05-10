import React from "react";
import { Modal, Button, message } from "antd";
import axios from "axios";
import { IProducts } from "./types/Product.type";

interface DeleteProductModalProps {
  visible: boolean;
  product: IProducts | null;
  onClose: () => void;
  onDeleteSuccess: () => void;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  visible,
  product,
  onClose,
  onDeleteSuccess,
}) => {
  const handleDelete = async () => {
    if (!product) return;

    try {
      await axios.delete(`http://localhost:3000/v1/products/${product._id}`);
      message.success("Product deleted successfully");
      onDeleteSuccess();
      onClose();
    } catch (error) {
      console.error("Delete product error:", error);
      message.error("Failed to delete product");
    }
  };

  return (
    <Modal
      title="Confirm Delete"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="delete" type="primary" danger onClick={handleDelete}>
          Delete
        </Button>,
      ]}
    >
      <p>
        Are you sure you want to delete the product{" "}
        <strong>{product?.model}</strong>?
      </p>
      <p>This action cannot be undone.</p>
    </Modal>
  );
};

export default DeleteProductModal;
