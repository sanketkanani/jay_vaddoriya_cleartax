import { Layout } from "antd";
import styles from "./Authentication.module.css";
import clsx from "clsx";
import { Icons } from "@constants";
import { Logo } from "@images";
import { Outlet } from "react-router-dom";

export const Authentication = () => {
  return (
    <Layout className={clsx(styles.main, "d-grid")}>
      <div className={clsx(styles.AuthenticationLeft, "position-relative")}>
        <div className="position-absolute start-0 bottom-0">
          {Icons.authenticationLeft}
        </div>
        <div
          className={clsx(
            styles.AuthenticationLeftContentWrapper,
            "clr-white font-secondary"
          )}
        >
          <div className="d-flex align-items-end">
            <h1 className="fw-medium">
              FILE YOUR <i className="fw-bold">ITR</i> WITH EASE ON
              <span className="d-block">BURNBLACK</span>
            </h1>
            <span className="mb-4 ms-3  ">{Icons.rondeWithCircle}</span>
          </div>
          <ul className={styles.AuthenticationLeftContentListingWrapper}>
            <li>Wallet based superfast payments</li>
            <li>Max Commission in Industry</li>
            <li>Maximum Tax Saving </li>
            <li>24/7 Support</li>
          </ul>
        </div>
      </div>
      <div className={clsx(styles.AuthenticationRight, "d-flex flex-column")}>
        <div className={styles.AuthenticationRightLogoWrapper}>
          <img src={Logo} alt="LogoBlue" />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};
