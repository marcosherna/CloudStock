import React from "react";
import { Button } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

export interface SortOrderButtonProps {
    onSortOrderChange: (order: string) => void;
}
export default function SortOrderButton({
    onSortOrderChange,
}: SortOrderButtonProps) {

  const [isAscending, setIsAscending] = React.useState<boolean>(true);
  const handleSortOrderChange = () => {
    setIsAscending(!isAscending);
    onSortOrderChange(isAscending ? "asc" : "desc");
  };
  return (
    <Button
      onClick={handleSortOrderChange}
      icon={
        isAscending ? <SortAscendingOutlined /> : <SortDescendingOutlined />
      }
    ></Button>
  );
}
