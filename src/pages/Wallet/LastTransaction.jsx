import { BBSectionCard } from "@components";
import styles from "./Wallet.module.css";
import { Avatar, Col, Row } from "antd";
import { Icons, LastTransactionData } from "@constants";

export const LastTransaction = () => {
  return (
    <BBSectionCard className={styles.lastTransaction} title="Last Transaction" bodyClassName="d-flex flex-column gap-3">
      {LastTransactionData && LastTransactionData.map((transaction, index) => {
        return (
          <Row key={index} className="align-items-center">
            <Col md={8}>
              <div className="d-flex align-items-center gap-3">
                <Avatar
                  style={{
                    backgroundColor: transaction.iconBGColor,
                    color: transaction.iconColor,
                    borderRadius: "var(--space-xl)",
                  }}
                  icon={transaction.icon}
                  size={55}
                  shape="square"
                />
                <div className="d-flex flex-column gap-1">
                  <p className="p-lg">{transaction.text}</p>
                  <p className="clr-light-purple">{transaction.date1}</p>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <span className="p-lg clr-light-purple">{transaction.num}</span>
            </Col>
            <Col md={4}>
              <span className="p-lg clr-light-purple">{transaction.date2}</span>
            </Col>
            <Col md={4}>
              <span className="p-lg clr-light-purple">{transaction.status}</span>
            </Col>
            <Col md={3} className="text-end">
              <span style={{ color: "#FE5C73" }} className="p-lg">{transaction.amount}</span>
            </Col>
          </Row>
        )
      })}
    </BBSectionCard>
  );
};
