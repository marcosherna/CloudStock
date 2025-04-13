import React from "react";
import { Table, Button, Tag, Switch } from "antd";
import type { TableProps } from "antd";

interface Category {
  key: number;
  name: string;
  description: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}
 

export default function CategoryView() {
 
  const [ categories, setCategories] = React.useState<Category[]>();  

  React.useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      // Simulate an API call
      const response = await new Promise<Category[]>(resolve => {
        setTimeout(() => {
          resolve(Array.from({ length: 100 }, (_, i) => ({
            key: i,
            name: `Category ${i}`,
            description: `Description for Category ${i}`,
            status: i % 2 === 0 ? true : false,
            created_at: new Date().toLocaleDateString(),
            updated_at: new Date().toLocaleDateString(),
          })));
        }, 1000);
      });
      setCategories(response);
    };
    fetchData();
  }, [])
 

  // const checkedHandle = (checked: boolean, category: Category) => {
  //   setCategories((prev) =>
  //     prev?.map((item) => item.key === category.key ? 
  //     { ...item, status: checked }
  //       : item )
  //   );
  // }

  const handleStatusChange = (key: number, checked: boolean) => {
    setCategories(prev => {
      if (!prev) return prev;
      const updated = [...prev];
      const index = updated.findIndex(cat => cat.key === key);
      if (index !== -1) {
        updated[index] = { ...updated[index], status: checked };
      }
      return updated;
    });
  }

  // const handleStatus = React.useCallback((key: number, checked: boolean) => {
  //   setCategories(prev => {
  //     if (!prev) return prev;
  //     const updated = [...prev];
  //     const index = updated.findIndex(cat => cat.key === key);
  //     if (index !== -1) {
  //       updated[index] = { ...updated[index], status: checked };
  //     }
  //     return updated;
  //   });
  // }, []);

  const column: TableProps<Category>["columns"] = [
    {
      title: "Id",
      dataIndex: "key",
      key: "name",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
      width: "35%",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status ? "green" : "red"}>
          {status ? "Activo" : "Inactivo"}
        </Tag>
      ),
    },

    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <Switch
          checked={record.status}
          onChange={(checked) => handleStatusChange(record.key, checked)}></Switch>
      ),
    },
    {
      title: "Fecha de creación",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Fecha de actualización",
      dataIndex: "updated_at",
      key: "updated_at",
    },
  ];


  

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div></div>
        <div className="flex space-x-2">
          <Button type="primary">Nuevo</Button>
        </div>
      </div>

      <div> 
        <Table dataSource={categories} columns={column}></Table>
      </div>
    </div>
  );
}
