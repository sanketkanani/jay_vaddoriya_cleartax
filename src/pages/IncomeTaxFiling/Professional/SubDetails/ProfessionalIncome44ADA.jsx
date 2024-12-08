import clsx from "clsx"
import styles from "../../IncomeTaxFiling.module.css";
import { Col, Divider, Form, Row, Select, Tag } from "antd";
import { BBButton, BBInput } from "@components";
import { useState } from "react";
import { Icons } from "@constants";

const ProfessionalIncome44ADA = () => {
  const [professionalIncome, setProfessionalIncome] = useState([
    { id: 1, PT: "", NoP: "", NoC: "", Des: "" },
  ]);
  const addSavingBankRow = () => {
    const savingBankRow = {
      id: professionalIncome.length + 1,
      bnkName: "",
      amount: "",
    };
    setProfessionalIncome([...professionalIncome, savingBankRow]);
  };
  const deleteSavingBankRow = (id) => {
    const updatedRows = professionalIncome.filter((row) => row.id !== id);
    setProfessionalIncome(updatedRows);
  };
  return (
    <>
      <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
        <h4>{`Please provide details of your profession(s)`}</h4>
        <p>You can first select the profession type and then specify the nature of profession</p>
        <div className="my-5">
          <>
            {professionalIncome.map((row) => (
              <Row
                key={row.id}
                gutter={[
                  { xs: 10, sm: 15, md: 20, lg: 26 },
                  { xs: 10, sm: 15, md: 20, lg: 26 },
                ]}
                className="mb-4"
              >
                <Col className="w-100" sm={{ span: 5 }}>
                  <Form.Item
                    name="Profession Type"
                    label="Profession Type"
                    rules={[{ required: true, message: 'Search and select' }]}
                  >
                    <Select
                      size="large"
                      showSearch
                      placeholder="Choose Share Type"
                      filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                      options={[
                        { value: '1', label: 'Computer and Related Services' },
                        { value: '2', label: 'Profession' },
                        { value: '2', label: 'Healthcare Services' },
                        { value: '2', label: 'Culture & Sports' },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col className="w-100" sm={{ span: 5 }}>
                  <Form.Item
                    name="Nature of Profession"
                    label="Nature of Profession*"
                    rules={[{ required: true, message: 'Search and select' }]}
                  >
                    <Select
                      size="large"
                      showSearch
                      placeholder="Choose Share Type"
                      filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                      options={[
                        { value: '1', label: '14001 - Software development' },
                        { value: '2', label: '14002 - Other software consultancy' },
                        { value: '2', label: '14003 - Data processing' },
                        { value: '2', label: '14004 - Database activities and distribution of electronic content' },
                        { value: '2', label: '14005 - Other IT enabled services' },
                        { value: '2', label: '14006 - BPO services' },
                        { value: '2', label: '14008 - Maintenance and repair of office, accounting and computing machinery' },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col className="w-100" sm={{ span: 5 }}>
                  <BBInput
                    type="text"
                    label={`Name of Company`}
                    placeholder=""
                  />
                </Col>
                <Col className="w-100" sm={{ span: 5 }}>
                  <BBInput
                    type="text"
                    label={`	Description (Optional)`}
                    placeholder=""
                  />
                </Col>
                <Col className="w-100" sm={{ span: 2 }}>
                  <BBButton
                    className={clsx(
                      "d-flex border-0"
                    )}
                    onClick={() => deleteSavingBankRow(row.id)}
                    style={{ marginTop: '24px' }}
                  >
                    {Icons.trash}
                  </BBButton>
                </Col>
              </Row>
            ))}
            <h5 className="my-5" style={{ cursor: 'pointer', color: '#4340ef' }} onClick={addSavingBankRow}>
              + Add more items
            </h5>
            <Divider />
          </>
        </div>
        <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
          <h4>Total Revenue/Sales Details</h4>
          <Tag
            color="#eff5fe"
            className="p-sm fw-medium"
            style={{
              color: "#000",
              padding: "6px 15px",
              borderRadius: 10,
              fontSize: "15px"
            }}
          >
            Gross Revenue: ₹ 0
          </Tag>
        </div>
        <div className="my-5">
          <Row
            gutter={[
              { xs: 10, sm: 15, md: 20, lg: 26 },
              { xs: 10, sm: 15, md: 20, lg: 26 },
            ]}
            className="mb-4"
          >
            <Col className="w-100" sm={{ span: 8 }}>
              <BBInput label={"Revenue via Cash"} prefix={"₹"} />
            </Col>
            <Col className="w-100" sm={{ span: 8 }}>
              <BBInput label={"Revenue via Other Modes"} prefix={"₹"} />
            </Col>
            <Col className="w-100" sm={{ span: 8 }}>
              <BBInput label={"Revenue via Digital Modes"} prefix={"₹"} />
            </Col>
          </Row>
        </div>
        <Divider />
        <div className="d-flex align-items-center justify-content-between flex-column flex-sm-row gap-3">
          <div>
            <h4>Total Expenses</h4>
            <p>Total expenses should be less than 50% of gross revenue</p>
          </div>
          <Row
            gutter={[
              { xs: 10, sm: 15, md: 20, lg: 26 },
              { xs: 10, sm: 15, md: 20, lg: 26 },
            ]}
            className="mb-4"
          >
            <Col className="w-100" sm={{ span: 24 }}>
              <BBInput label={"Total Expenses"} prefix={"₹"} />
              <p>Total expenses should be less than 50% of gross revenue</p>
            </Col>
          </Row>
        </div>
        <Tag
          color="#eff5fe"
          className="p-sm fw-medium my-5 d-flex justify-content-between align-items-center"
          style={{
            color: "#000",
            padding: "10px 15px",
            borderRadius: 10,
            fontSize: "15px",
            width: "100%"
          }}
        >
          <h6>Net taxable income u/s 44ADA(Gross Revenue - Total Expenses)</h6>
          <h6> ₹ 0</h6>
        </Tag>
      </div>
    </>
  )
}

export default ProfessionalIncome44ADA