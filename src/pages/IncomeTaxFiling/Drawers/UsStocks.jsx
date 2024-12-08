import { CaretRightOutlined } from '@ant-design/icons';
import { BBButton } from '@components';
import { theme, Collapse, Drawer, message, Upload } from 'antd';
import styles from "../IncomeTaxFiling.module.css";
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const UsStocks = ({ isModalOpen, setIsModalOpen }) => {
    // Handler to close the popup
    const handleClose = () => {
        setIsModalOpen(false);
    }
    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    const props = {
        name: "file",
        action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
        headers: {
            authorization: "authorization-text",
        },
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const getItems = (panelStyle) => [{
        key: '1',
        label: <>
            <h4>{`How to upload file from INDmoney`}</h4>
        </>,
        children: (
            <>
                <div className='mt-3 ms-5'>
                    <ol>
                        <li>Go to INDmoney and login to your account</li>
                        <li>
                            Select 2023 - 24 under the “Financial year” option</li>
                        <li>Choose Q1 in the “from” field and Q4 in the “To” field</li>
                        <li>
                            Click on the blue arrow mark</li>
                        <li>{`Finally, Click on "Download Tax P&L report for all segments"`}</li>
                    </ol>
                </div>
                <p className="ms-4 mt-2 d-flex gap-2">
                    <span>Detailed steps to download file</span>
                    <span>&rarr;</span>

                </p>
            </>
        ),
        style: panelStyle,
    },]
    return (
        <Drawer
            title={`Import from INDmoney - US Stocks`}
            placement="right"
            width={"50%"}
            onClose={handleClose}
            open={isModalOpen}
        >
            <h4>For how many days were you in India in FY 2023-24 (Apr 2023 to Mar 2024)?</h4>
            <div className="mt-4 mb-5">
                <Upload {...props}>
                    <BBButton
                        variant={"default"}
                        className={clsx(styles.isEditBtnWrapper, "border-2")}
                        isEditBtn
                    >
                        Browse Files
                    </BBButton>
                </Upload>
                <div className='d-flex flex-wrap gap-3 text-decoration-underline mt-4'>
                    <Link href="#">Download Sample INDmoney report</Link>
                    <Link href="#">Download Sample INDmoney report</Link>
                </div>
            </div>

            <div className="px-2 pt-5" style={{ border: "1px solid #f4f4f4", borderRadius: "20px" }}>
                <div className="mx-5">
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{ background: token.colorBgContainer }}
                        items={getItems(panelStyle)}
                    />
                </div>
            </div>
        </Drawer>
    );
};

export default UsStocks;
