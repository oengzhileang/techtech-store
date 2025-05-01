import { Table, TableColumnsType } from "antd";

// Define the generic interface with a type parameter T
interface TablessProps<T> {
  columns: TableColumnsType<T>;
  data: T[];
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  totalItems: number;
}

// Use the generic type T in the component definition
const Tabless = <T,>({
  // Add comma after T to indicate it's a generic parameter
  columns,
  data,
  pageSize,
  currentPage,
  onPageChange,
  totalItems,
}: TablessProps<T>) => (
  <Table
    rowKey="_id"
    className="overflow-auto h-full"
    columns={columns}
    dataSource={data}
    pagination={{
      current: currentPage,
      pageSize: pageSize,
      total: totalItems,
      onChange: onPageChange,
      showSizeChanger: true,
      pageSizeOptions: ["5", "10", "20", "30", "50"],
      showTotal: (total) => `Total ${total} items`,
    }}
  />
);

export default Tabless;
