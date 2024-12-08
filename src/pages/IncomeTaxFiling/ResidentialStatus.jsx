import "./ResidentialStatus.css"
import { Button, Drawer } from 'antd';

const ResidentialStatus = ({ isModalOpen, setIsModalOpen }) => {
    // Handler to close the popup
    const handleClose = () => {
        setIsModalOpen(false);
    }
    return (
        <Drawer
            title={`Residential Status`}
            placement="right"
            width={"50%"}
            onClose={handleClose}
            open={isModalOpen}
        >
            <h4>For how many days were you in India in FY 2023-24 (Apr 2023 to Mar 2024)?</h4>
            <div className="mt-4 mb-5">
                <Button onClick={handleClose} className="me-4">Less than 30 days</Button>
                <Button onClick={handleClose} className="me-4">60-119 days</Button>
                <Button onClick={handleClose} className="me-4">120-181 days</Button>
                <Button onClick={handleClose} className="me-4">{`>= 182`}</Button>

            </div>

            <div className="px-3 py-5" style={{ background: "#f4f4f4", borderRadius: "20px" }}>
                <div className="mx-5">
                    <ul>
                        <li>How to check the number of days stayed? - One way is to check your travel tickets and calculate the number of days you stayed in India during the Financial Year</li>
                        <li>{`You don't need to worry about which Residential Status to select. Just answer a few questions and we will auto-select it for you.`}</li>
                        <li>For more information on Residential Status on Income Tax, you can go through this  article</li>
                    </ul>
                </div>
                <p className="ms-4 mt-2">Example: If your have stayed in India for less than 60 days, as per the ITD rules, your residential status will be auto-selected as “Non-Resident”.</p>
            </div>
        </Drawer>
    );
};

export default ResidentialStatus;
