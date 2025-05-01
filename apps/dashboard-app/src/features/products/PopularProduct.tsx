import Tabless from "@/components/Table";
import {
  columnsProductsMock,
  PopularProductMock,
} from "@/utils/mock-data/PopularProductsMock";
import { useState } from "react";
import { ProductsType } from "../../utils/types/Product.type";
import { Card } from "antd";
const PopularProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handlePageChange = (page: number, newPageSize?: number) => {
    setCurrentPage(page);
    if (newPageSize) {
      setPageSize(newPageSize);
    }
  };

  // Calculate the data to display based on current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData: ProductsType[] = PopularProductMock.slice(
    startIndex,
    startIndex + pageSize
  );
  return (
    <Card
      style={{
        padding: 0,
        borderRadius: 30,
        backgroundColor: "#e5e7eb",
      }}
    >
      <div className="space-y-5">
        <h1 className="text-xl">Most Popular Products</h1>
        <Tabless
          key="_id"
          columns={columnsProductsMock}
          data={paginatedData}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          totalItems={PopularProductMock.length}
        />
      </div>
    </Card>
  );
};

export default PopularProduct;
