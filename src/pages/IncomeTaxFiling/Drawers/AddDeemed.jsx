import { Button, Drawer, Space, Switch, } from 'antd';

const AddDeemed = ({ isModalOpen, setIsModalOpen }) => {
    const handleClose = () => {
        setIsModalOpen(false);
    };
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <>
            <Drawer
                title="Add Property DetailsAdd Deemed Capital Gains"
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
                            Save
                        </Button>
                    </Space>
                }
            >
                <div style={{ border: "1px solid gray", borderRadius: "8px" }} className='my-4 p-5 d-flex justify-content-between align-items-center'>
                    <h4> Short Term Capital Gain</h4>
                    <Switch onChange={onChange} />

                </div>
                <div style={{ border: "1px solid gray", borderRadius: "8px" }} className='my-4 p-5 d-flex justify-content-between align-items-center'>
                    <h4> Long Term Capital Gain</h4>
                    <Switch onChange={onChange} />

                </div>



            </Drawer>
        </>
    );
};

export default AddDeemed;
