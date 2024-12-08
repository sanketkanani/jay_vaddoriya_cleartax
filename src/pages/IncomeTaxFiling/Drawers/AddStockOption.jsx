import { Button, Col, Collapse, DatePicker, Divider, Drawer, Form, Row, Select, Space, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const AddStockOption = ({ isModalOpen, setIsModalOpen }) => {
    const handleClose = () => {
        setIsModalOpen(false);
    };

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    const getInerFaq = (panelStyle) => [
        {

            key: '1',
            label: <>
                <h4>{`Who issues listed Indian RSUs/ESOPs?`}</h4>

            </>,
            children: (
                <>
                    <p>
                        IThese are issued by companies listed on Indian Stock Exchanges. For example, RSUs given by Reliance, Wipro, HUL etc. to their employees.</p>
                </>
            ),
            style: panelStyle,
        },
        {

            key: '2',
            label: <>
                <h4>{`Who issues unlisted Indian RSUs/ESOPs?`}</h4>

            </>,
            children: (
                <>
                    <p>
                        These are issued by companies not listed on Indian Stock Exchanges. For example, RSUs given by many Indian Start-ups. These are denominated in Indian Rupees(₹) and not USD($). You should check your ESOP or RSU grant statement to confirm this.</p>
                </>
            ),
            style: panelStyle,
        },
        {

            key: '3',
            label: <>
                <h4>{`Who issues listed foreign RSUs/ESOPs?`}</h4>

            </>,
            children: (
                <>
                    <p>These are issued by companies listed on Foreign Stock Exchanges. For example, RSUs given by Amazon, which is listed on NASDAQ, to their Indian employees.</p>
                </>
            ),
            style: panelStyle,
        },
        {

            key: '4',
            label: <>
                <h4>{`Who issues unlisted foreign RSUs/ESOPs?`}</h4>

            </>,
            children: (
                <>
                    <p>These are issued by companies not listed on Stock Exchanges and are denominated in foreign currency. For example, the Fair Market Value, Strike Price etc. all could be in USD. You should check your ESOP or RSU grant statement to confirm this.</p>
                </>
            ),
            style: panelStyle,
        },

    ]
    const getItems = (panelStyle) => [
        {
            key: '1',
            label: <>
                <h4>{`Help and Guide to fill the details`}</h4>
            </>,
            children: (
                <>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{ background: token.colorBgContainer }}
                        items={getInerFaq(panelStyle)}
                    />
                </>
            ),
            style: panelStyle,
        },]
    return (
        <>
            <Drawer
                title="Add Property Details"
                width={"50%"}
                onClose={handleClose}
                open={isModalOpen}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        {/* <Button onClick={handleClose}>Cancel</Button> */}
                        <Button onClick={handleClose} type="primary">
                            Next
                        </Button>
                    </Space>
                }
            >
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{ background: token.colorBgContainer }}
                    items={getItems(panelStyle)}
                />
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="Select type of asset"
                                label="Indian RSUs & ESOPs - Listed"
                                rules={[{ required: true, message: 'Indian RSUs & ESOPs - Listed' }]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Choose Share Type"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        { value: '1', label: 'Indian RSUs & ESOPs - Listed' },
                                        { value: '2', label: 'Indian RSUs & ESOPs - Unilisted' },
                                        { value: '3', label: 'Foreign RSUs & ESOPs - Listed' },
                                        { value: '4', label: 'Foreign RSUs & ESOPs - Unilisted' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="Date of Sale *"
                                rules={[{ required: true, message: 'Please choose the dateTime' }]}
                                style={{ width: '100%' }}
                            >
                                <DatePicker onChange={onChangeDate} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="Date of Purchase *"
                                rules={[{ required: true, message: 'Please choose the dateTime' }]}
                                style={{ width: '100%' }}
                            >
                                <DatePicker onChange={onChangeDate} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Divider />
            </Drawer>
        </>
    );
};

export default AddStockOption;
