import { BBHeader, BBSidebar } from "@components";
import { Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.css";
import { useState } from "react";
import { Layout } from "antd";
import { Aside } from "../../hooks";
import clsx from "clsx";
const { Content } = Layout;

export const DashboardLayout = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileCollapsed, setMobileCollapsed] = useState(false);
  const [show, setShow] = useState(false);

  const { currentPage } = Aside();
  return (
    <>
      <Layout className={styles.main}>
        <BBSidebar
          collapsed={collapsed}
          collapsedHandle={() => setCollapsed(!collapsed)}
          mobileCollapsed={mobileCollapsed}
          mobileCollapsedHandle={() => setMobileCollapsed(true)}
          items={items}
          defaultSelectedKeys={[currentPage]}
          selectedKeys={[currentPage]}
          className={clsx(show === true ? styles.Sidebar : "")}
        />
        <Layout>
          <BBHeader
            collapsed={collapsed}
            collapseHandle={() => setCollapsed(!collapsed)}
            mobileShow={() => setShow(!show)}
            show={show}
          />
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
