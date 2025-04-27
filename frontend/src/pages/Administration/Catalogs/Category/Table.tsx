import React from "react";
import {
  Table as AntTable,
  TableProps as AntTableProps,
  Button,
  Switch,
} from "antd";

import { Category } from "../../../../models/index";

export interface TableProps {
  loading: boolean;
  categories: Array<Category>;
  onChanceToggleStatus: (id: number, status: boolean) => void;
}
export default function Table({
  loading,
  categories,
  onChanceToggleStatus,
}: TableProps) {
  const handleToggleStatus = React.useCallback(
    (id: number, checked: boolean) => {
      onChanceToggleStatus(id, checked);
    },
    [onChanceToggleStatus]
  );

  const columns = React.useMemo<AntTableProps<Category>["columns"]>(
    () => [
      {
        key: "id",
        title: "ID",
        dataIndex: "id",
      },
      {
        key: "name",
        title: "Name",
        dataIndex: "name",
        width: "20%",
        render: (name: string, record: Category) => (
          <div className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: record.color }}
            ></div>

            <span className="text-nowrap">{name}</span>
          </div>
        ),
      },
      {
        key: "description",
        title: "Description",
        dataIndex: "description",
        width: "40%",
        render: (description: string) => (
          <span className="text-nowrap">{description}</span>
        ),
      },
      {
        key: "status",
        title: "Status",
        dataIndex: "status",
        render: (status: boolean, record) => (
          <Switch
            checked={status}
            onChange={(checked) => handleToggleStatus(record.id ?? 0, checked)}
          />
        ),
      },
      {
        key: "created_at",
        title: "Created At",
        dataIndex: "created_at",
        width: "200px",
        render: (createdAt: string) => (
          <span className="text-nowrap">{createdAt}</span>
        ),
      },
      {
        key: "updated_at",
        title: "Updated At",
        dataIndex: "updated_at",
        width: "200px",
        render: (updatedAt: string) => (
          <span className="text-nowrap">{updatedAt}</span>
        ),
      },
      {
        key: "actions",
        title: "Actions",
        dataIndex: "actions",
        align: "center",
        fixed: "right",
        width: 150,
        render: () => (
          <div className="flex items-center space-x-2">
            <Button type="link" size="small">
              Edit
            </Button>
            <Button type="link" size="small" danger>
              Delete
            </Button>
          </div>
        ),
      },
    ],
    [handleToggleStatus]
  );

  return (
    <AntTable
      loading={loading}
      columns={columns}
      dataSource={categories}
      rowKey="id"
      className="ant-table-striped ant-table-bordered"
      scroll={{ x: "auto" }}
    />
  );
}
