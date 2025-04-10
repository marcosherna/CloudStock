import React from "react";
import { Layout, theme } from "antd";
import NavApp from "../components/NavApp";
import SiderApp from "../components/SiderApp";
import { SidebarProvider } from "../context/SidebarContext";

const { Content, Footer } = Layout;

export default function Dashboard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <SidebarProvider>
      <Layout hasSider>
        <SiderApp />
        <Layout>
          <NavApp />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{
                padding: 24,
                textAlign: "center",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <p>long content</p>
              {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? "more" : "..."}
                    <br />
                  </React.Fragment>
                ))
              }
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            CloudStock ©{new Date().getFullYear()} Created by Marcos
          </Footer>
        </Layout>
      </Layout>
    </SidebarProvider>
  );
}
