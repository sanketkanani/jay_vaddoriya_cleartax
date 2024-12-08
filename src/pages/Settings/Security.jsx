import { BBButton, BBPasswordInput, BBSwitch } from "@components"
import { Col, Row } from "antd"
export const Security = () => {
  return (
    <>
      <Row gutter={[30, 22]} className="flex-column">
        <Col sm={24}>
          <p className="h4 fw-medium mb-3">Two-factor Authentication</p>
          <BBSwitch
            label="Enable or disable two factor authentication"
          />
        </Col>
        <Col sm={12}>
          <p className="h4 fw-medium mb-3">Change Password</p>
          <BBPasswordInput label="Current Password" />
        </Col>
        <Col sm={12}>
          <BBPasswordInput label="New Password" />
        </Col>
        <Col sm={12}>
          <p className="h4 fw-medium mb-3">Wallet Transaction Password</p>
          <BBPasswordInput label="Current Password" />
        </Col>
        <Col sm={12}>
          <BBPasswordInput label="New Password" />
        </Col>
        <Col sm={24} className="text-end">
          <BBButton variant="primary" className="px-5">
            <span className="d-inline-flex px-5">Save</span>
          </BBButton>
        </Col>
      </Row>
    </>
  )
}