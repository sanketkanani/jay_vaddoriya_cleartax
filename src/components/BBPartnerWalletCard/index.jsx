import clsx from "clsx";
import styles from "./BBPartnerWalletCard.module.css";
import { LogoLight, Profile1 } from "@images";
import { Image } from "antd";
export const BBPartnerWalletCard = () => {
  return (
    <div className={clsx(styles.BBPartnerWalletCardWrapper, "d-grid")}>
      <div className={clsx(styles.BBPartnerWalletCardLeftWrapper)}>
        <div className="clr-white">
          <p className="p-sm clr-white">PAN Number</p>
          <h2 className="h1 fw-semibold">CSF0XXXXX</h2>
        </div>
        <div
          className={clsx(
            styles.BBPartnerWalletCardLeftBottomWrapper,
            "d-grid"
          )}
        >
          <div>
            <span>Legal Name</span>
            <h2 className="clr-white">Asif Khan</h2>
          </div>
          <div>
            <span>Last ITR Filed</span>
            <h2 className="clr-white">AY 2023-24</h2>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          styles.BBPartnerWalletCardRightWrapper,
          "d-flex flex-column flex-column align-items-center justify-content-between gap-4"
        )}
      >
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Image src={Profile1} alt="avatar" />
        </div>
        <img src={LogoLight} alt="" />
      </div>
    </div>
  );
};
