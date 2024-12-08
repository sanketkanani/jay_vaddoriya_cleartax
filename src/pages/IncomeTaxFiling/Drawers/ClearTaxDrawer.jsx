import { BBButton } from '@components';
import { Drawer, message, Upload, Tag } from 'antd';
import styles from "../IncomeTaxFiling.module.css";
import clsx from 'clsx';

const ClearTaxTemplate = ({ isModalOpen, setIsModalOpen }) => {
    // Handler to close the popup
    const handleClose = () => {
        setIsModalOpen(false);
    }

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
    return (
        <Drawer
            title={`Upload ClearTax Template`}
            placement="right"
            width={"50%"}
            onClose={handleClose}
            open={isModalOpen}
        >
            <div>
                <h4>1. Download Cleartax Template</h4>
                <p>Fill the details as instructed in the template</p>
                <div className="mt-4 mb-5">
                    <BBButton
                        variant={"default"}
                        className={clsx(styles.isEditBtnWrapper, "border-2")}
                        isEditBtn
                    >
                        Download Template
                    </BBButton>
                </div>
            </div>
            <div>
                <h4>2. Upload the filled template</h4>
                <p>Please upload the filled ClearTax template below</p>
                <div className="mt-4 mb-5">
                    <Upload {...props}>
                        <BBButton
                            variant={"default"}
                            className={clsx(styles.isEditBtnWrapper, "border-2")}
                            isEditBtn
                        >
                            Browse File
                        </BBButton>
                    </Upload>
                </div>
            </div>
            <Tag
                color="rgba(255, 231, 203, 1)"
                className="p-sm"
                style={{
                    color: "#FF9922",
                    padding: "20px",
                    borderRadius: 10,
                    width: "100%",
                }}
            >
                <h4>Please do not directly upload P&L report from your broker.</h4>
                <p>Fill in your P&L details in the ClearTax Template and upload it here.</p>
            </Tag>
        </Drawer>
    );
};

export default ClearTaxTemplate;
