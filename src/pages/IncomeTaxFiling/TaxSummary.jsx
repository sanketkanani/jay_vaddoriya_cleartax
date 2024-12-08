import ShieldDone from "@images/icons/Shield-Done.svg";
import { BBButton } from "@components";
import styles from "./IncomeTaxFiling.module.css";
import { useNavigate } from "react-router-dom";
import { TaxFormSection } from "./TaxFormSection";
import clsx from "clsx";

export const TaxSummary = ({ prevStep }) => {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <TaxFormSection
          img={
            <img
              src={ShieldDone}
              width={22}
              height={22}
              className="object-fit-contain"
            />
          }
          title={"Your tax summary"}
        >
          <div className={clsx(styles.TaxSummaryWrapper, "d-grid")}>
            <div>
              <h5 className="fw-normal lh-sm mb-2">Gross Income</h5>
              <h2 className="h2-lg lh-sm mb-0 clr-black">₹ 368</h2>
            </div>
            <div>
              <h5 className="fw-normal lh-sm mb-2">Gross Income</h5>
              <h2 className="h2-lg lh-sm mb-0 clr-black">₹ 368</h2>
            </div>
            <div>
              <h5 className="fw-normal lh-sm mb-2">Gross Income</h5>
              <h2 className="h2-lg lh-sm mb-0 clr-black">₹ 0</h2>
            </div>
            <div>
              <h5 className="fw-normal lh-sm mb-2">Gross Income</h5>
              <h2 className="h2-lg lh-sm mb-0 clr-black">₹ 0</h2>
            </div>
          </div>
        </TaxFormSection>
        <TaxFormSection
          img={
            <img
              src={ShieldDone}
              width={22}
              height={22}
              className="object-fit-contain"
            />
          }
          title={"Your Tax Regime"}
          description={
            "BurnBlack recommends you to continue with Old Regime. Both the regimes are equally beneficial to you"
          }
        >
          <div className={clsx(styles.savedTexesWrapper, "mt-5")}>
            <h3>
              You saved <span className="fw-bolder">₹19,888</span> in Taxes
            </h3>
          </div>
        </TaxFormSection>
      </div>
      <div className={styles.footer}>
        <BBButton onClick={prevStep} isEditBtn>
          Previous
        </BBButton>
        <BBButton
          onClick={() => navigate("/partner/dashboard")}
          variant="primary"
          className={"flex-row-reverse gap-3"}
          size="large"
        >
          Pay & File ITR
        </BBButton>
      </div>
    </main>
  );
};
