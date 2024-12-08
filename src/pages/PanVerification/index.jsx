import { BBButton, BBInput } from "@components";
import styles from "./PanVerification.module.css";
import clsx from "clsx";
import { Icons } from "@constants";
import { useNavigate } from "react-router-dom";

const PanVerification = () => {
  const Navigate = useNavigate();
  return (
    <div
      className={clsx(
        styles.panVeriWrapper,
        "d-grid justify-content-between align-items-start"
      )}
    >
      <div>
        <h2 className="display-1 clr-primary fw-medium">PAN Verification</h2>
        <BBInput
          placeholder="Enter your PAN number"
          parentClassName={styles.panVeriWrapperInput}
        />
        <BBButton
          onClick={() => Navigate("/pan-details")}
          isEditBtn
          icon={Icons.crossArrow}
        >
          Verify
        </BBButton>
      </div>
      <div className={clsx(styles.panCardDesignWrapper)}></div>
    </div>
  );
};

export default PanVerification;
