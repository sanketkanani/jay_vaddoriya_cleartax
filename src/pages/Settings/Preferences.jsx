import { BBButton, BBInput, BBSwitch } from "@components";
import { Col, Row } from "antd";

export const Preferences = () => {
  return (
    <Row gutter={[30, 22]}>
      <Col className="w-100" sm={12}>
        <BBInput label="Currency" />
      </Col>
      <Col className="w-100" sm={12}>
        <BBInput label="Language" />
      </Col>
      <Col sm={24}>
        <p className="h4 fw-medium mt-2 mb-3">Notification</p>
        <BBSwitch
          wrapperClassName="mb-3"
          label="Transaction failed or successful"
        />
        <BBSwitch wrapperClassName="mb-3" label="Support Tickets" />
        <BBSwitch
          wrapperClassName="mb-3"
          label={
            <>
              Wallet Low Balance Alert{" "}
              <span style={{ color: "#BCBCBC" }}>(under 2000Rs)</span>
            </>
          }
        />
      </Col>
      <Col sm={24} className="text-end">
        <BBButton variant="primary" className="px-5">
          <span className="d-inline-flex px-5">Save</span>
        </BBButton>
      </Col>
    </Row>
  );
};
