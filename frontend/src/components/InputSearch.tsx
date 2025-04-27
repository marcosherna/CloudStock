import React from 'react';
import { Input, Space,  Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export interface InputSearchProps {
    onSearch: (searchText: string) => void;
}
export default function InputSearch({ onSearch }: InputSearchProps) { 

    const [searchText, setSearchText] = React.useState<string>(""); 

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    const handleSearch = () => { 
        onSearch(searchText);
        setSearchText(""); // Clear the input field after search
    }
  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input 
        value={searchText}
        onChange={handleTextChange}
        onPressEnter={handleSearch}
        placeholder="Search..."
        prefix={<SearchOutlined />}
        allowClear
      />
      <Button onClick={handleSearch} type="primary">Search</Button>
    </Space.Compact>
  );
}