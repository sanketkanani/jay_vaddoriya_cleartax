import { BBSectionCard } from "@components";
import styles from "./Wallet.module.css";
import { Avatar } from "antd";
import { PreviousRechargesData } from "@constants";

export const PreviousRecharges = () => {
  return (
    <BBSectionCard
      className={styles.previousRecharges}
      title="Previous Recharges"
    >
      <div className="d-flex flex-column gap-4">
        {PreviousRechargesData &&
          PreviousRechargesData.map((item, index) => {
            return (
              <div key={index} className="d-flex align-items-center gap-3">
                <Avatar
                  style={{
                    backgroundColor: item.iconBGColor,
                    color: item.iconColor,
                    borderRadius: "var(--space-xl)",
                  }}
                  icon={item.icon}
                  size={60}
                  shape="square"
                />
                <div>
                  <p style={{ color: "#B1B1B1" }} className="p-lg fw-medium">
                    {item.text}
                  </p>
                  <p className="clr-light-purple">{item.time}</p>
                </div>
                <span className="p clr-light-purple d-inline-flex ms-auto">
                  {item.price}
                </span>
              </div>
            );
          })}
      </div>
    </BBSectionCard>
  );
};
