import React from "react";
import { Input } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const SearchBox: React.FC<{
  placeholder: string;
  onSearch: SearchProps["onSearch"];
}> = ({ placeholder, onSearch }) => (
  <Search
    placeholder={placeholder}
    allowClear
    onSearch={onSearch}
    style={{ width: 300 }}
  />
);

export default SearchBox;
