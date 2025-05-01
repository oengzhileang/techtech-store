import React from "react";
import { Input } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const SearchBox: React.FC<{ placeholder: string }> = ({ placeholder }) => (
  <Search
    placeholder={placeholder}
    allowClear
    onSearch={onSearch}
    style={{ width: 300 }}
  />
);

export default SearchBox;
