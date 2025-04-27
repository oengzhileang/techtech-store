import Tabless from "@/components/Table";
import { CustomersMock } from "@/features/customers/CustomerMock";
import { Customerscolumns } from "@/features/customers/CustomerColumn";
import SearchBox from "@/components/SearchBox";
import { Button } from "antd";
import { useState } from "react";
import { CustomerTypes } from "@/features/customers/types/Customers.types";

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  // State to manage product data
  const [customers, setCustomer] = useState<CustomerTypes[]>(CustomersMock);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input
  const handleSearch = (value: string) => {
    setSearchQuery(value.trim()); // Update search query
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (page: number, newPageSize?: number) => {
    setCurrentPage(page);
    if (newPageSize) {
      setPageSize(newPageSize);
    }
  };

  // Filter products based on search query
  const filteredProducts = customers.filter((user) =>
    // Search by id, key, or other fields (e.g., name if available)
    [user.id, user.key, user.name?.toLowerCase() || ""].some((field) =>
      field?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  // Calculate paginated data
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData: CustomerTypes[] = filteredProducts.slice(
    startIndex,
    startIndex + pageSize
  );
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Customers</h1>
      <div className="flex justify-between">
        <SearchBox
          placeholder="Search by id"
          // onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
        <Button type="primary">New Customer +</Button>
      </div>
      <Tabless
        data={paginatedData}
        columns={Customerscolumns}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        totalItems={customers.length}
      />
    </div>
  );
};

export default Customers;
