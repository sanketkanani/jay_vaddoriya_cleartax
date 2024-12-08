import { BBButton } from '@components';
import { Drawer, message, Upload } from 'antd';
import styles from "../IncomeTaxFiling.module.css";
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const ImportGoldBrokers = ({ isModalOpen, setIsModalOpen }) => {
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
            title={`Import from Gullak Money`}
            placement="right"
            width={"50%"}
            onClose={handleClose}
            open={isModalOpen}
        >
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
                    <Link href="#">How to download report</Link>
                </div>
            </div>
        </Drawer>
    );
};

export default ImportGoldBrokers;
