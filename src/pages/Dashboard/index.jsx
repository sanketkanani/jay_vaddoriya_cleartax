import { useTitle } from "../../App";
import styles from "./Dashboard.module.css";
import { Summary } from "./Summary";
import { BusinessGrowth } from "./BusinessGrowth";
import { BBMyWalletCard, BBSectionCard } from "@components";

const Dashboard = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Overview");
  return (
    <>
      <div className={styles.dashboardGrid}>
        <BBMyWalletCard />
        <BBSectionCard title="Summary" className="mb-5">
          <Summary />
        </BBSectionCard>
        <BusinessGrowth />
      </div>
    </>
  );
};

export default Dashboard;
