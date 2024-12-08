import clsx from "clsx"
import styles from "../../IncomeTaxFiling.module.css";
import { Col, Divider, Form, Row, Select, Tag } from "antd";
import { BBButton, BBInput } from "@components";
import { useState } from "react";
import { Icons } from "@constants";

const BussinessIncome44ADA = () => {
  const [businessIncome, setBusinessIncome] = useState([
    { id: 1, BT: "", NoB: "", NoBC: "", Des: "" },
  ]);
  const addSavingBankRow = () => {
    const savingBankRow = {
      id: businessIncome.length + 1,
      bnkName: "",
      amount: "",
    };
    setBusinessIncome([...businessIncome, savingBankRow]);
  };
  const deleteSavingBankRow = (id) => {
    const updatedRows = businessIncome.filter((row) => row.id !== id);
    setBusinessIncome(updatedRows);
  };
  return (
    <>
      <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
        <h4>{`Please provide details of your business(s)`}</h4>
        <p>You can first select the business type and then specify the nature of business</p>
        <div className="my-5">
          <>
            {businessIncome.map((row) => (
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
                    name="Business Type"
                    label="Business Type"
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
                        { value: '1', label: 'Agriculture & Forestry' },
                        { value: '2', label: 'Fish Farming' },
                        { value: '3', label: 'Mining & Quarrying' },
                        { value: '4', label: 'Manufacturing' },
                        { value: '5', label: 'Electricity, Gas and Water' },
                        { value: '6', label: 'Construction' },
                        { value: '7', label: 'Real Estate & Renting Services' },
                        { value: '8', label: 'Renting of Machinery' },
                        { value: '9', label: 'Wholesale & Retail' },
                        { value: '10', label: 'Hotels, Restaurants & Hospitals' },
                        { value: '11', label: 'Transport & Logistics' },
                        { value: '12', label: 'Telecom & Post Services' },
                        { value: '13', label: 'Financial Services' },
                        { value: '14', label: 'Computer and Related Services' },
                        { value: '15', label: 'Research and Development' },
                        { value: '16', label: 'Profession' },
                        { value: '17', label: 'Eductation Services' },
                        { value: '18', label: 'Healthcare Services' },
                        { value: '19', label: 'Social & Community Work' },
                        { value: '20', label: 'Culture & Sports' },
                        { value: '21', label: 'Other Services' },
                        { value: '22', label: 'Extra Territorial Organisations' },
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
                        { value: '1', label: '15001 - Natural sciences and engineering' },
                        { value: '2', label: '15002 - Social sciences and humanities' },
                        { value: '3', label: '15003 - Other Research and Development activities n.e.c.' },
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
          <h4>Total Gross Revenue(Total Sales or Turnover)</h4>
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
            Total Gross Revenue: ₹ 0
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
        <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3" style={{ marginTop: "10%" }}>
          <h4>Total Income/Profit as per your calculation</h4>
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
            Total Income: ₹ 0
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
              <BBInput label={"Profit via Cash"} prefix={"₹"} />
              <p>Should be at least 8% of gross revenue</p>
            </Col>
            <Col className="w-100" sm={{ span: 8 }}>
              <BBInput label={"Profit via Other Modes"} prefix={"₹"} />
              <p>Should be at least 8% of gross revenue</p>
            </Col>
            <Col className="w-100" sm={{ span: 8 }}>
              <BBInput label={"Profit via Digital Modes"} prefix={"₹"} />
              <p>Should be at least 6% of gross revenue</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default BussinessIncome44ADA