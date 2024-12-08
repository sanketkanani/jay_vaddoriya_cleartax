import styles from "./PanDetails.module.css";
import { BBButton, } from "@components";
import { Icons } from "@constants";
import { Steps } from "antd";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const PanDetails = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div
        className={clsx(
          styles.PanDetailsTopWrapper,
          "d-grid align-items-center justify-content-between clr-white"
        )}
      >
        <div className={clsx(styles.PanDetailsTOPWrapper)}>
          <div
            className={clsx(
              styles.PanDetailsLeftContentWrapper,
              "d-flex flex-column"
            )}
          >
            <h3 className="fw-medium">Hello there,</h3>
            <h1 className="fw-medium">File your IT return in 3 simple steps</h1>
            <p className="p-lg fw-medium">AY 2023-2024</p>
            <p className="p-lg fw-medium">
              PAN : <span className="clr-white">BNX2149D</span>
            </p>
          </div>
          <div className={clsx(styles.PanDetailsLeftButtonWrapper, "d-flex")}>
            <BBButton
              icon={Icons.crossArrow}
              onClick={() => Navigate("/income-tax-filing")}
              isEditBtn
            >
              Start Filling
            </BBButton>
            <BBButton icon={Icons.crossArrow} variant={"primary"}>
              File for another person
            </BBButton>
          </div>
        </div>
        <div className={clsx(styles.PanDetailsRightStepsWrapper)}>
          <Steps
            direction="vertical"
            size="default"
            current={3}
            items={[
              {
                title: <h2 className="clr-white">Link PAN</h2>,
                description: (
                  <p className="h4">to get started with your filling</p>
                ),
              },
              {
                title: <h2 className="clr-white">Add Details</h2>,
                description: (
                  <p className="h4">
                    add income, deductions & other relevant info.
                  </p>
                ),
              },
              {
                title: <h2 className="clr-white">File ITR</h2>,
                description: <p className="h4">& get acknowledged from ITD</p>,
              },
            ]}
          />
        </div>
      </div>
      <div className={clsx(styles.PanDetailsBottomWrapper, "d-grid")}>
        <div
          className={clsx(
            styles.PanDetailsBottomBoxWrapper,
            "d-flex align-items-center justify-content-between"
          )}
        >
          <div className={clsx(styles.PanDetailsBottomBoxLeftWrapper)}>
            <h2 className="clr-primary fw-medium">Hire a Expert</h2>
          </div>
          <div className={clsx(styles.PanDetailsBottomBoxRightWrapper)}>
            {Icons.crossArrow}
          </div>
        </div>
        <div
          className={clsx(
            styles.PanDetailsBottomBoxWrapper,
            "d-flex align-items-center justify-content-between"
          )}
        >
          <div className={clsx(styles.PanDetailsBottomBoxLeftWrapper)}>
            <h2 className="clr-primary fw-medium">Get Assistance</h2>
          </div>
          <div className={clsx(styles.PanDetailsBottomBoxRightWrapper)}>
            {Icons.crossArrow}
          </div>
        </div>
        <div
          className={clsx(
            styles.PanDetailsBottomBoxWrapper,
            "d-flex align-items-center justify-content-between"
          )}
        >
          <div className={clsx(styles.PanDetailsBottomBoxLeftWrapper)}>
            <h3 className="clr-primary display-1 lh-1">
              <span className="h3">Plans starts from</span> Rs. 399
            </h3>
          </div>
          <div className={clsx(styles.PanDetailsBottomBoxRightWrapper)}>
            {Icons.crossArrow}
          </div>
        </div>
      </div>
    </>
  );
};

export default PanDetails;
