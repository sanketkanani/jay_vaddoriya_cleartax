import { Button, Col, DatePicker, Divider, Drawer, Form, Row,  Space } from 'antd';

const BondAndDebentures = ({ isModalOpen, setIsModalOpen }) => {
    const handleClose = () => {
        setIsModalOpen(false);
    };

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <Drawer
                title="Add Other Assets"
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
                <Form layout="vertical" hideRequiredMark>
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

export default BondAndDebentures;
