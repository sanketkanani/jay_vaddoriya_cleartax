import { BBButton, BBSectionCard } from "@components";
import styles from "./Dashboard.module.css";
import clsx from "clsx";
import { ChipCard, LogoLight } from "@images";

export const MyWallet = () => {
  return (
    <>
      <BBSectionCard
        title="My Wallet"
        bodyClassName={clsx(styles.myWallet, "bg-primary-gradient clr-white")}
      >
        <div className={styles.myWalletStats}>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex flex-column">
              <span className="p-sm">Wallet Balance</span>
              <span className="h2-lg fw-semibold">₹ 25,756</span>
            </div>
            <img src={ChipCard} alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <span className="p-sm">Partner Name</span>
              <span className="h3 fw-semibold">Vivek DaOne</span>
            </div>
            <img
              src={LogoLight}
              alt=""
              style={{ transform: "translateX(25%)" }}
            />
          </div>
        </div>
        <div className={styles.myWalletBtnWrapper}>
          <BBButton
            className={clsx(styles.myWalletBtn, "w-100")}
            size="small"
            variant="primary"
          >
            + Add Money
          </BBButton>
        </div>
      </BBSectionCard>
    </>
  );
};
