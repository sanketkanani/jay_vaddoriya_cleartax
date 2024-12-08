import { CaretRightOutlined } from '@ant-design/icons';
import { BBButton, BBInput } from '@components';
import { Col, Collapse, Row, theme } from 'antd';
import { useState } from 'react';
const InterestIncome = () => {

    const [savingRow, setSavingRows] = useState([
        { id: 1, bnkName: "", amount: "", },
    ]);
    const addSavingBankRow = () => {
        const savingBankRow = {
            id: savingRow.length + 1,
            bnkName: "",
            amount: "",
        };
        setSavingRows([...savingRow, savingBankRow]);
    };
    const deleteSavingBankRow = (id) => {
        const updatedRows = savingRow.filter((row) => row.id !== id);
        setSavingRows(updatedRows);
    };

    // ===============fixedDeposits===============//

    const [fixedDeposits, setFixedDeposits] = useState([
        { id: 1, description: "", amount: "", },
    ]);
    const addFixedDeposistRow = () => {
        const FixedDeposistRow = {
            id: fixedDeposits.length + 1,
            bnkName: "",
            amount: "",
        };
        setFixedDeposits([...fixedDeposits, FixedDeposistRow]);
    };
    const deleteFixedDeposistRow = (id) => {
        const updatedRows = fixedDeposits.filter((row) => row.id !== id);
        setFixedDeposits(updatedRows);
    };

    // ===============p2p===============//

    const [p2p, setP2p] = useState([
        { id: 1, EnterNameofPlatform: "", EnterInterestAmount: "", },
    ]);
    const addP2pRow = () => {
        const p2pRow = {
            id: p2p.length + 1,
            bnkName: "",
            amount: "",
        };
        setP2p([...p2p, p2pRow]);
    };
    const deleteP2pRow = (id) => {
        const updatedRows = p2p.filter((row) => row.id !== id);
        setP2p(updatedRows);
    };

    // =============== Bond Investments===============//
    const [bondInvestment, setBondInvestment] = useState([
        { id: 1, EnterNameofPlatform: "", EnterInterestAmount: "", },
    ]);
    const addbondInvestmentRow = () => {
        const bondInvestmentRow = {
            id: bondInvestment.length + 1,
            bnkName: "",
            amount: "",
        };
        setBondInvestment([...bondInvestment, bondInvestmentRow]);
    };
    const deletebondInvestmentRow = (id) => {
        const updatedRows = bondInvestment.filter((row) => row.id !== id);
        setBondInvestment(updatedRows);
    };

    // ===============Other Interest ===============//
    const [otherInterest, setOtherInterest] = useState([
        { id: 1, description: "", amount: "", },
    ]);
    const addotherInterestRow = () => {
        const otherInterestRow = {
            id: otherInterest.length + 1,
            bnkName: "",
            amount: "",
        };
        setOtherInterest([...otherInterest, otherInterestRow]);
    };


    const deleteotherInterestRow = (id) => {
        const updatedRows = otherInterest.filter((row) => row.id !== id);
        setOtherInterest(updatedRows);
    };

    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    const getItems = (panelStyle) => [
        {
            key: '1',
            label: <>
                <h4>Interest from Savings Bank</h4>
                <p>
                    Add interest earned from Savings Bank or Post Office Bank Account</p>
            </>,
            children: (
                <>
                    {savingRow.map((row) => (
                        <Row
                            key={row.id}
                            gutter={[
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                            ]}
                            className="mb-4"
                        >
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput
                                    type="text"
                                    label={`Name of Bank`}
                                    placeholder=""
                                />
                            </Col>
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput label={"Amount"} prefix={"₹"} />
                            </Col>
                            <Col className="w-100" sm={{ span: 2 }}>
                                <BBButton
                                    isDangerBtn
                                    className="mt-5"
                                    onClick={() => deleteSavingBankRow(row.id)}
                                >
                                    Delete
                                </BBButton>
                            </Col>
                        </Row>
                    ))}
                    <div className="my-5 fw-medium" style={{ cursor: 'pointer' }} onClick={addSavingBankRow}>
                        + Add more items
                    </div>
                </>
            ),
            style: panelStyle,
        },
        {
            key: '2',
            label: <>
                <h4>Interest from Fixed Deposits</h4>
                <p>Add interest earned from any fixed deposits including Post Office FDs</p>
            </>,
            children: (
                <>
                    {fixedDeposits.map((row) => (
                        <Row
                            key={row.id}
                            gutter={[
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                            ]}
                            className="mb-4"
                        >
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput
                                    type="text"
                                    label={`Description`}
                                    placeholder=""
                                />
                            </Col>
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput label={"Amount"} prefix={"₹"} />
                            </Col>
                            <Col className="w-100" sm={{ span: 2 }}>
                                <BBButton
                                    isDangerBtn
                                    className="mt-5"
                                    onClick={() => deleteFixedDeposistRow(row.id)}
                                >
                                    Delete
                                </BBButton>
                            </Col>
                        </Row>
                    ))}
                    <div className="my-5 fw-medium" style={{ cursor: 'pointer' }} onClick={addFixedDeposistRow}>
                        + Add more items
                    </div>
                </>
            ),
            style: panelStyle,
        },
        {
            key: '3',
            label: <>
                <h4>Interest from P2P (Peer to Peer Lending) Investments</h4>
                <p>
                    Popular Platforms: CredMint, 12% Club, LendBox, IndiaP2P</p>
            </>,
            children: (
                <>
                    {p2p.map((row) => (
                        <Row
                            key={row.id}
                            gutter={[
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                            ]}
                            className="mb-4"
                        >
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput
                                    type="text"
                                    label={`Enter Name of Platform`}
                                    placeholder=""
                                />
                            </Col>
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput label={"Enter Interest Amount"} prefix={"₹"} />
                            </Col>
                            <Col className="w-100" sm={{ span: 2 }}>
                                <BBButton
                                    isDangerBtn
                                    className="mt-5"
                                    onClick={() => deleteP2pRow(row.id)}
                                >
                                    Delete
                                </BBButton>
                            </Col>
                        </Row>
                    ))}
                    <div className="my-5 fw-medium" style={{ cursor: 'pointer' }} onClick={addP2pRow}>
                        + Add more items
                    </div>
                </>
            ),
            style: panelStyle,
        },
        {
            key: '4',
            label: <>
                <h4>Interest from Bond Investments</h4>
                <p>
                    Popular Platforms: Grip, Jiraaf, WintWealth, TheFixedIncome, GoldenPi</p>
            </>,
            children: (
                <>
                    {bondInvestment.map((row) => (
                        <Row
                            key={row.id}
                            gutter={[
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                            ]}
                            className="mb-4"
                        >
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput
                                    type="text"
                                    label={`Enter Name of Platform`}
                                    placeholder=""
                                />
                            </Col>
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput label={"Enter Interest Amount"} prefix={"₹"} />
                            </Col>
                            <Col className="w-100" sm={{ span: 2 }}>
                                <BBButton
                                    isDangerBtn
                                    className="mt-5"
                                    onClick={() => deletebondInvestmentRow(row.id)}
                                >
                                    Delete
                                </BBButton>
                            </Col>
                        </Row>
                    ))}
                    <div className="my-5 fw-medium" style={{ cursor: 'pointer' }} onClick={addbondInvestmentRow}>
                        + Add more items
                    </div>
                </>
            ),
            style: panelStyle,
        },
        {
            key: '5',
            label: <>
                <h4>Interest from PF (Provident Fund)</h4>
                <p>Add interest earned from Employee / Recognized Provident Fund (EPF/RPF)</p>
            </>,
            children: (
                <>
                    <Row
                        gutter={[
                            { xs: 10, sm: 15, md: 20, lg: 26 },
                            { xs: 10, sm: 15, md: 20, lg: 26 },
                        ]}
                        className="mb-4"
                    >
                        <Col className="w-100" sm={{ span: 8 }}>
                            <BBInput
                                type="text"
                                label={`Type`}
                                placeholder=""
                            />
                        </Col>
                        <Col className="w-100" sm={{ span: 8 }}>
                            <BBInput label={"Amount"} prefix={"₹"} />
                        </Col>
                    </Row>
                </>
            ),
            style: panelStyle,
        },
        {
            key: '6',
            label: <>
                <h4>
                    Interest on Income Tax Refund</h4>
                <p>
                    Add details if you have received interest along with tax refund last year.</p>
            </>,
            children: (
                <>
                    <Row
                        gutter={[
                            { xs: 10, sm: 15, md: 20, lg: 26 },
                            { xs: 10, sm: 15, md: 20, lg: 26 },
                        ]}
                        className="mb-4"
                    >

                        <Col className="w-100" sm={{ span: 8 }}>
                            <BBInput label={"Enter the interest amount only, do not enter the entire refund amount."} prefix={"₹"} />
                        </Col>
                    </Row>
                </>
            ),
            style: panelStyle,
        },
        {
            key: '8',
            label: <>
                <h4>
                    Any Other Interest Income</h4>
                <p>
                    Add interest earned from Unsecured Loans, National Savings Certificate etc.</p>
            </>,
            children: (
                <>
                    {otherInterest.map((row) => (
                        <Row
                            key={row.id}
                            gutter={[
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                                { xs: 10, sm: 15, md: 20, lg: 26 },
                            ]}
                            className="mb-4"
                        >
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput
                                    type="text"
                                    label={`Name of Bank`}
                                    placeholder=""
                                />
                            </Col>
                            <Col className="w-100" sm={{ span: 8 }}>
                                <BBInput label={"Amount"} prefix={"₹"} />
                            </Col>
                            <Col className="w-100" sm={{ span: 2 }}>
                                <BBButton
                                    isDangerBtn
                                    className="mt-5"
                                    onClick={() => deleteotherInterestRow(row.id)}
                                >
                                    Delete
                                </BBButton>
                            </Col>
                        </Row>
                    ))}
                    <div className="my-5 fw-medium" style={{ cursor: 'pointer' }} onClick={addotherInterestRow}>
                        + Add more items
                    </div>
                </>
            ),
            style: panelStyle,
        },
    ];

    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{ background: token.colorBgContainer }}
            items={getItems(panelStyle)}
        />
    )
}

export default InterestIncome