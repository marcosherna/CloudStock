import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Segmented, Button, Tabs } from "antd";

import CategoryTab from "./Catalogs/Category/CategoryTab";

export default function CatalogsView() {
  return (
    <>
      <div className="text-nowrap overflow-x-hidden">
        <Breadcrumb
          items={[
            {
              href: "",
              title: <HomeOutlined />,
            },
            {
              href: "",
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: "Application",
            },
          ]}
        />
      </div>

      <section className="container px-4 mx-auto pt-5">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <div>
            <h2 className="text-lg font-medium text-gray-800 text-start">
              Catalogs
            </h2>

            <p className="mt-1 text-sm text-gray-500 text-justify">
              These companies have purchased in the last 12 months.
            </p>
          </div>

          <div className="flex items-center mt-4 space-x-2 text-end">
            <Button type="dashed">Import</Button>
            <Button type="dashed">Export</Button>
            <Button type="primary">Add</Button>
          </div>
        </div>

        <div className="mt-6 md:flex md:items-center justify-between">
          <div className="inline-flex">
            <Segmented
              options={[
                {
                  label: "categories",
                  value: "all",
                },
                {
                  label: "brands",
                  value: "active",
                },
                {
                  label: "jobs titles",
                  value: "inactive",
                },
              ]}
            />
          </div>

          {/* <div className="flex items-center mt-4 md:mt-0">
            <Input prefix={<SearchOutlined />} placeholder="Search..."></Input>
          </div> */}
        </div>

        <div className="mt-6 ">
          {/* <CatalogTable data={fakeData}></CatalogTable> */}

          <Tabs
            destroyInactiveTabPane={true}
            onTabClick={(key) => console.log(key)}
            items={[
              {
                key: "1",
                label: "Categories",
                children: <CategoryTab />,
              },
              {
                key: "2",
                label: "Brands",
                // children: <CategoryTab/>,
              },
              {
                key: "3",
                label: "Jobs titles",
                // children: <CategoryTab/>,
              },
            ]}
          ></Tabs>
        </div>
      </section>
    </>
  );
}
