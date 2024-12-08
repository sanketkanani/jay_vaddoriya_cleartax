import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "./assets/css/utilities.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { MantineProvider } from "@mantine/core";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "'Inter', sans-serif",
          fontSizeHeading1: 32,
          fontSizeHeading2: 24,
          fontSizeHeading3: 20,
          fontSizeHeading4: 18,
          wireframe: false,
          colorPrimary: "#4340F3",
          colorInfo: "#4877ff",
          colorSuccess: "#427B2E",
          colorWarning: "#f7b731",
          colorError: "#FF7171",
          colorText: "var(--clr-text)",
          colorBgBase: "#ffffff",
        },
        components: {
          Layout: {
            bodyBg: "#F5F7FA",
            siderBg: "#fff",
            headerBg: "#fff",
          },
          Menu: {
            itemBorderRadius: 0,
            fontSize: "var(--text-2xl)",
            itemMarginInline: 0,
            itemActiveBg: "transparent",
            itemBg: "transparent",
            itemSelectedBg: "transparent",
            itemSelectedColor: "var(--clr-primary)",
            itemColor: "#B1B1B1",
          },
          Pagination: {
            fontFamily: "'Inter', sans-serif",
          },
          Table: {
            headerBg: "#fff",
            headerColor: "#718EBF",
            headerSplitColor: "transparent",
            borderColor: "var(--clr-gray-line)",
          },
          Tabs: {
            fontSize: "var(--space-lg)",
            horizontalItemPadding: "var(--space-sm) var(--space-lg)",
            itemColor: "var(--clr-light-purple)",
          },
          Select: {
            // colorBgContainer: "var(--color-gray-tint-100)",
            // colorPrimaryHover: "var(--color-gray-tint-100)",
            // colorBorder: "none",
          },
          Input: {
            // colorBgContainer: "var(--color-gray-tint-100)",
            // colorPrimaryHover: "var(--color-gray-tint-100)",
            // colorBorder: "none",
          },
          DatePicker: {
            // fontFamily: "'Sora', sans-serif",
            // colorBgContainer: "var(--color-gray-tint-100)",
            // colorPrimaryHover: "var(--color-gray-tint-100)",
            // colorBorder: "none",
            // fontSize: 14,
            // fontSizeLG: 14,
          },
          Switch: {
            colorPrimary: "#16DBCC",
            colorPrimaryHover: "#0ec9bb",
            colorTextQuaternary: "#DFEAF2",
            colorTextTertiary: "#DFEAF2",
            trackHeight: 31,
            trackMinWidth: 56,
            handleSize: 27,
          },
        },
      }}
    >
      <MantineProvider theme={{}}>
        <App />
      </MantineProvider>
    </ConfigProvider>
  </React.StrictMode>
);
