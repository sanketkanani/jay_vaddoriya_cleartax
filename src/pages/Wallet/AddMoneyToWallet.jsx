import { BBButton, BBDatePicker, BBInput, BBSectionCard } from "@components";
import styles from "./Wallet.module.css";
import { Button, Col, Row } from "antd";
import clsx from "clsx";

export const AddMoneyToWallet = () => {
  return (
    <BBSectionCard
      className={clsx(styles.addMoneyToWallet, "d-flex flex-column")}
      bodyClassName="h-100"
      title="Add Money to Wallet"
    >
      <p className="p-lg clr-light-purple mb-3">
        Wallet Cards generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash
        advances.
      </p>
      <Row gutter={[24, 24]} className="align-items-end">
        <Col className="w-100" sm={24}>
          <BBInput
            label="Amount"
            placeholder="Enter Amount in INR"
            suffix={
              <div className="d-flex gap-2">
                <Button className={styles.addonBtn} size="small">
                  +1,000
                </Button>
                <Button className={styles.addonBtn} size="small">
                  +5,000
                </Button>
                <Button className={clsx(styles.addonBtn,"d-sm-block d-none")} size="small">
                  +10,000
                </Button>
              </div>
            }
          />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="Payment Type" placeholder="Card" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="Card Type" placeholder="Master Card" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="Card Number" placeholder="**** **** **** ****" />
        </Col>
        <Col className="w-100" sm={12}>
          {/* <BBInput label="Expiration Date" placeholder="DD MMM YYY" /> */}
          <BBDatePicker label="Expiration Date" placeholder="DD MMM YYY" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="Name on Card" placeholder="Name" />
        </Col>
        <Col sm={12} className="text-end">
          <BBButton variant="primary" className="px-5">
            <span className="d-inline-flex px-5">Pay</span>
          </BBButton>
        </Col>
      </Row>
    </BBSectionCard>
  );
};
