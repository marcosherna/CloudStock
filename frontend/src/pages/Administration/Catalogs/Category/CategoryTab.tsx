import React from "react";
import { Button } from "antd";

import SortOrderButton from "../../../../components/SortOrderButton";
import InputSearch from "../../../../components/InputSearch";
import { Category } from "../../../../models/index";
import Table from "./Table";
import DrawerModal, { useDrawer } from "../../../../components/DrawerModal";
import Form from "./Form";

export default function CategoryTab() {
  const {
    isShowDrawer,
    handleShowDrawer,
    loading: loadingForm,
    setLoading: setLoadingForm,
  } = useDrawer();
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCategories([
        {
          id: 1,
          name: "Category 1",
          description: "Description 1",
          color: "#00ff00",
          status: true,
          created_at: "2023-01-01",
          updated_at: "2023-01-01",
        },
        {
          id: 2,
          name: "Category 2",
          description: "Description 2",
          status: false,
          color: "#ff0000",
          created_at: "2023-01-02",
          updated_at: "2023-01-02",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleToggleStatus = (id: number, checked: boolean) => {
    setLoading(true);
    setTimeout(() => {
      setCategories((prev) =>
        prev.map((category) =>
          category.id === id && category.status !== checked
            ? { ...category, status: checked }
            : category
        )
      );
      setLoading(false);
    }, 1000);
  };

  const handleSearch = React.useCallback((value: string) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Search:", value);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSort = React.useCallback((sortOrder: string) => {
    console.log("Sort order:", sortOrder);
    setLoading(true);
    setTimeout(() => {
      setCategories((prev) => [...prev].reverse());
      setLoading(false);
    }, 1000);
  }, []);

  const handleOnSubmit = (category: Category) => {
    setLoadingForm(true);
    setTimeout(() => {
      setCategories((prev) => [...prev, { ...category, id: prev.length + 1 }]);
      setLoadingForm(false);
      handleShowDrawer();
    }, 1000);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 mb-4 space-y-3 md:space-y-0">
        <div className="space-x-2 text-start">
          <Button onClick={handleShowDrawer} type="primary">
            Nuevo
          </Button>
        </div>
        <div className="flex space-x-2 md:w-1/3">
          <InputSearch onSearch={handleSearch} />
          <SortOrderButton onSortOrderChange={handleSort} />
        </div>
      </div>

      <Table
        loading={loading}
        categories={categories}
        onChanceToggleStatus={handleToggleStatus}
      ></Table>

      <DrawerModal
        show={isShowDrawer}
        onClose={handleShowDrawer}
        loading={loadingForm}
      >
        <Form onSubmit={handleOnSubmit}></Form>
      </DrawerModal>
    </div>
  );
}
