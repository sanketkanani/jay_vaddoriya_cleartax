import { useState } from 'react';
import { Button, Col, DatePicker, Divider, Drawer, Form, Radio, Row, Select, Space } from 'antd';

const AddEquityAndMutual = ({ isModalOpen, setIsModalOpen }) => {
    const [value, setValue] = useState(1);
    const handleClose = () => {
        setIsModalOpen(false);
    };
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <Drawer
                title="Add Equity Shares & Mutual Funds"
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
                    <Radio.Group onChange={onChange} value={value} className='mt-3 '>
                        <Radio value={1}>Stokes</Radio>
                        <Radio value={2}>Mutual Funds</Radio>
                    </Radio.Group>
                    <Divider />

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="Select type of asset"
                                label="Select type of asset"
                                rules={[{ required: true, message: 'Select type of asset' }]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Choose Share Type"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        { value: '1', label: 'List Securities' },
                                        { value: '2', label: 'None Listed Securoties' },
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

export default AddEquityAndMutual;
