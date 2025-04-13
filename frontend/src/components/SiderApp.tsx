import React from "react";

import { Layout, Menu } from "antd";
import { useSidebar } from "../context/SidebarContext";
import { CloudAndBox } from "./icons/Customs";
import { items } from "../utils/menu"; 
import { useNavigate } from "react-router";


const { Sider } = Layout; 
 

export default function SiderApp() {
  const [collapsedWidth, setCollapsedWidth] = React.useState(60);
  const { collapsed } = useSidebar();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCollapsedWidth(0);
      } else {
        setCollapsedWidth(60);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    console.log("DashboardView useEffect");
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigateHandle = (key:string) => {  
    navigate(`${key}`);
  }

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
      }}
      collapsedWidth={collapsedWidth}
      collapsed={collapsed}
      width={256}
      theme="light"
    >
      <div className="flex pl-4 py-3 items-center space-x-2 overflow-x-hidden  font-sans font-extrabold whitespace-nowrap">
        <CloudAndBox
          style={{ fontSize: "30px", color: "#4F46E5" }}
        ></CloudAndBox>
        <span className="text-[1.3em] ">
          Cloud<span className="text-[#4F46E5]">Stock</span>
        </span>
      </div>
      <Menu
        theme="light"
        mode="inline"
        inlineIndent={15}
        style={!collapsed ? { width: 256 } : { width: 60 }}
        defaultSelectedKeys={["1"]}
        onClick={(e)=> navigateHandle(e.key)}
        items={items}
      />
    </Sider>
  );
}
