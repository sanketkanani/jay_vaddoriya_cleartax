import clsx from "clsx"
import styles from "../../IncomeTaxFiling.module.css";
import { Col, Form, Row, Select } from "antd";
import { BBButton, BBInput } from "@components";
import { useState } from "react";
import { Icons } from "@constants";

const RegularBusiness = () => {
    const [businessIncome, setBusinessIncome] = useState([
        { id: 1, BC: "", NoB: "", NoB2: "", Des: "" },
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
                <h4>{`Please provide details of your profession(s) or Business(s)`}</h4>
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
                                        name="Business category"
                                        label="Business category"
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
                                        name="Nature of Business"
                                        label="Nature of Business*"
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
                    </>
                </div>
            </div>
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>P&L (Profit And Loss)</h4>
                        <p>
                            Details of income and expenses of your business/profession for the period - April 2023 to March 2024</p>
                    </div>
                    <h5 className="my-5" style={{ cursor: 'pointer', color: '#4340ef' }} >
                        Add Details
                    </h5>
                </div>
            </div>
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Balance Sheet</h4>
                        <p>
                            Details of assets and liabilities of your business/profession as on 31st March, 2024</p>
                    </div>
                    <h5 className="my-5" style={{ cursor: 'pointer', color: '#4340ef' }} onClick={addSavingBankRow}>
                        Add Details
                    </h5>
                </div>
            </div>
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Depreciation</h4>
                        <p>
                            Summary of depreciation on all assets under the Income-Tax Act.</p>
                    </div>
                    <h5 className="my-5" style={{ cursor: 'pointer', color: '#4340ef' }} onClick={addSavingBankRow}>
                        Add Details
                    </h5>
                </div>
            </div>
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Schedule ICDS</h4>
                        <p>

                            Effect of Income Computation and Disclosure Standards on Profit</p>
                    </div>
                    <h5 className="my-5" style={{ cursor: 'pointer', color: '#4340ef' }} onClick={addSavingBankRow}>
                        Add Details
                    </h5>
                </div>
            </div>
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Schedule ESR</h4>
                        <p>

                            Deduction under section 35 (expenditure on scientific research)</p>
                    </div>
                    <h5 className="my-5" style={{ cursor: 'pointer', color: '#4340ef' }} onClick={addSavingBankRow}>
                        Add Details
                    </h5>
                </div>
            </div>
        </>
    )
}

export default RegularBusiness

import React from 'react'
import { useNavigate } from "react-router-dom";


