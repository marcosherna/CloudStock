import { Layout, theme, Button, Dropdown } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSidebar } from "../context/SidebarContext"; 

const { Header } = Layout;

export default function NavApp() {
  const { collapsed, setCollapsed } = useSidebar();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onCollapseHandle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header
      className="!py-3 !h-fit"
      style={{ padding: 0, background: colorBgContainer }}
    >
      <div className="flex flex-wrap px-4 justify-between items-center mb-0 ">
        <div className="flex items-center"> 
          {/* <CloudStock
            className="!text-[#4F46E5] " 
          ></CloudStock> */}
        </div>
        <div className="flex space-x-2 items-center">
          <Dropdown
            menu={{
              items: [
                { key: "1", label: "Settings" },
                { key: "2", label: "Profile" },
                { key: "3", label: "About" },
                { type: "divider" },
                { key: "5", label: "Logout" },
                { key: "6", label: "Help" },
              ],
            }}
            trigger={["click"]}
            placement="bottomRight"
            arrow
          >
            <Button icon={<SettingOutlined />}></Button>
          </Dropdown>
          <Button
            icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
            onClick={onCollapseHandle}
          ></Button>
        </div>
      </div>
    </Header>
  );
}
