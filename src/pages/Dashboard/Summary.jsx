import styles from "./Dashboard.module.css";
import { Avatar } from "antd";
import { Icons } from "@constants";

export const Summary = () => {
  return (
    <div className={(styles.summary, styles.summaryGrid)}>
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
      <div className={styles.summaryItem}>
        <Avatar
          size={55}
          icon={Icons.TaxPaid}
          style={{ backgroundColor: "#FED9FF" }}
        />
        <div>
          <h4 className="fw-medium">Total Tax Paid</h4>
          <span className="display-1 fw-medium d-block lh-sm clr-black">
            ₹ 82.8L
          </span>
        </div>
      </div>
      <div className={styles.summaryItem}>
        <Avatar
          size={55}
          icon={Icons.PendingApplication}
          style={{ backgroundColor: "#FFD9D9" }}
        />
        <div>
          <h4 className="fw-medium">Pending Applications</h4>
          <span className="display-1 fw-medium d-block lh-sm clr-black">
            52
          </span>
        </div>
      </div>
    </div>
  );
};
