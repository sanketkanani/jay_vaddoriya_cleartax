import { BBPartnerWalletCard, BBSectionCard } from "@components";
import { useTitle } from "../../App";
import { EBooks } from "../Resources/EBooks";
import styles from "./partnerDashboard.module.css";
import { StartFiling } from "./StartFiling";

export const PartnerDashboard = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Overview");
  return (
    <div className="">
      <div className={styles.PartnerDashboardTop}>
        <div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="lh-sm clr-dark fw-semibold">My Wallet</h2>
          </div>
          <BBPartnerWalletCard />
        </div>
        <BBSectionCard title="Start Filing" bodyClassName="p-0" className="mb-5">
          <StartFiling />
        </BBSectionCard>
      </div>
      <BBSectionCard title="Resources" className="mb-5">
        <EBooks />
      </BBSectionCard>
    </div>
  );
};
