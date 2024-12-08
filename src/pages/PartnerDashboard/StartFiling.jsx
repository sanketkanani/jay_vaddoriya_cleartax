import { BBButton } from "@components";
import styles from "./partnerDashboard.module.css";
import { Avatar, Steps } from "antd";
import { Icons } from "@constants";
import clsx from "clsx";

export const StartFiling = () => {
  return (
    <div className={clsx(styles.summary, styles.summaryGrid)}>
      <div className={styles.summaryItem}>
        <Avatar
          size={55}
          icon={Icons.ITRFiled}
          style={{ backgroundColor: "#FFF5D9" }}
        />
        <div>
          <h4 className="fw-medium">Total ITR Filed</h4>
          <span className="display-1 fw-medium d-block lh-sm clr-black">
            523
          </span>
        </div>
      </div>
      <div
        className={clsx(styles.summaryItem, "gap-4 justify-content-between")}
      >
        <div
          className="d-flex flex-column gap-4
        "
        >
          <h4>Start Filing your next ITR</h4>
          <Steps
            direction="vertical"
            size="default"
            current={3}
            items={[
              {
                title: <h2 className="clr-primary">Link PAN</h2>,
              },
              {
                title: <h2 className="clr-primary">Add Details</h2>,
              },
              {
                title: <h2 className="clr-primary">File ITR</h2>,
              },
            ]}
          />
        </div>
        <div className="mt-auto">
          <BBButton variant={"primary"} className="">
            Start Filing
          </BBButton>
        </div>
      </div>
      <div className={styles.summaryItem}>
        <Avatar
          size={55}
          icon={Icons.Earnings}
          style={{ backgroundColor: "#DCFAF8" }}
        />
        <div>
          <h4 className="fw-medium">Total Earnings</h4>
          <span className="display-1 fw-medium d-block lh-sm clr-black">
            ₹ 149.2K
          </span>
        </div>
      </div>
    </div>
  );
};
