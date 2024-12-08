import { BBMyWalletCard } from "@components";
import { useTitle } from "../../App";
import styles from "./Wallet.module.css";
import { LastTransaction } from "./LastTransaction";
import { AddMoneyToWallet } from "./AddMoneyToWallet";
import { PreviousRecharges } from "./PreviousRecharges";

const Wallet = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Wallet");

  return (
    <>
      <div className={styles.WalletGrid}>
        <BBMyWalletCard hasAddMoneyBtn={false} hasImg={false} />
        <AddMoneyToWallet />
        <PreviousRecharges />
        <LastTransaction />
      </div>
    </>
  );
};

export default Wallet;
