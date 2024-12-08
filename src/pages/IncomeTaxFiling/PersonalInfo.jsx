import ShieldDone from "@images/icons/Shield-Done.svg";
import { TaxFormSection } from "./TaxFormSection";
import styles from "./IncomeTaxFiling.module.css";
import { Col, Row } from "antd";
import { BBButton, BBDatePicker, BBInput, BBRadioButton } from "@components";
import { Icons } from "@constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ResidentialStatus from "./ResidentialStatus";

export const PersonalInfo = ({ nextStep }) => {
  const [value, setValue] = useState("Apple");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Handlers to open and close the modal
  const showModal = () => setIsModalOpen(true);
  const [rows, setRows] = useState([
    { id: 1, accountNumber: "", ifscCode: "", bankName: "", type: "" },
  ]); // Dkn
  const handelChang = ({ target: { value } }) => {
    setValue(value);
  };
  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      accountNumber: "",
      ifscCode: "",
      bankName: "",
      type: "",
    };
    setRows([...rows, newRow]);
  }; // Dkn
  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  }; // Dkn
  const options = [
    {
      label: "Men",
      value: "Men",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  const MaritalStatusOptions = [
    {
      label: "Married",
      value: "Married",
    },
    {
      label: "Unmarried",
      value: "Unmarried",
    },
    {
      label: "Prefer not to disclose",
      value: "Prefer not to disclose",
    },
  ];
  const Navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <TaxFormSection
          img={Icons.shiedIcons}
          title={"Permanent Information"}
          description={
            "Please provide all info as per your government identity documents"
          }
        >
          <Row
            gutter={[
              { xs: 10, sm: 15, md: 20, lg: 26 },
              { xs: 10, sm: 15, md: 20, lg: 26 },
            ]}
          >
            <Col className="w-100" sm={{ span: 8 }}>
              <BBInput label={"First Name*"} />
            </Col>
            <Col className="w-100" sm={{ span: 8 }}>
              <BBInput label={"Middle Name*"} />
            </Col>
            <Col className="w-100" sm={{ span: 8 }}>
              <BBInput label={"Last Name*"} />
            </Col>
            <div className="justify-content-between d-flex flex-wrap w-100">
              <Col className="w-100" sm={{ span: 8 }}>
                <BBDatePicker label={"Date of Birth*"} />
              </Col>
              <Col className="">
                <BBRadioButton
                  label={"Gender*"}
                  onChange={handelChang}
                  value={value}
                  options={options}
                />
              </Col>
            </div>
            <Col className="">
              <BBRadioButton
                label={"Marital Status*"}
                onChange={handelChang}
                value={value}
                options={MaritalStatusOptions}
              />
            </Col>
            <Col className="w-100" sm={{ span: 24 }}>
              <BBInput
                label={"Father's Name*"}
                placeholder={"Enter your father’s name"}
              />
            </Col>
          </Row>
        </TaxFormSection>
        <TaxFormSection
          img={Icons.scan}
          title={"Identification & Contact Details"}
          description={
            "Please provide all info as per your government identity documents"
          }
        >
          <Row
            gutter={[
              { xs: 10, sm: 15, md: 20, lg: 26 },
              { xs: 10, sm: 15, md: 20, lg: 26 },
            ]}
          >
            <Col className="w-100" sm={{ span: 11 }}>
              <BBInput
                type="number"
                label={"Aadhar Number*"}
                placeholder={"Enter 12 digit number"}
              />
            </Col>
            <Col
              xs={{ span: 2 }}
              className="d-flex align-items-stretch justify-content-center"
            >
              <div className="pt-3 mt-4 fw-medium h4">OR</div>
            </Col>
            <Col className="w-100" sm={{ span: 11 }}>
              <BBInput
                type="number"
                label={"Aadhaar Enrollment No.*"}
                placeholder={"Enter 28 digit number"}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <BBInput
                type="number"
                label={"PAN Number*"}
                placeholder={"Enter 10 digit PAN number"}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <BBInput
                type="number"
                label={"Mobile Number*"}
                placeholder={"Enter 10 digit mobile number"}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <BBInput
                type="email"
                label={"Email*"}
                placeholder={"Enter your email"}
              />
            </Col>
          </Row>
        </TaxFormSection>
        <TaxFormSection
          // img={Icons.scan}
          title={"Additional Information (Optional)"}
          description={
            "Leave empty if you don’t have additional information"
          }
        >
          <Row
            gutter={[
              { xs: 10, sm: 15, md: 20, lg: 26 },
              { xs: 10, sm: 15, md: 20, lg: 26 },
            ]}
          >
            <Col xs={{ span: 24 }}>
              <BBInput
                type="number"
                label={"Secondary mobile number"}
                placeholder={"Enter 10 digit secondary mobile number"}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <BBInput
                type="email"
                label={"Secondary email address"}
                placeholder={"eg:email@gmail.com"}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <BBInput
                type="number"
                label={"Landline number"}
                placeholder={"Enter your landline telephone number"}
              />
            </Col>
          </Row>
        </TaxFormSection>
        <TaxFormSection
          img={
            <img
              src={ShieldDone}
              width={22}
              height={22}
              className="object-fit-contain"
            />
          }
          title={"Address"}
          description={
            "Please provide all info as per your government identity documents"
          }
        >
          <Row
            gutter={[
              { xs: 10, sm: 15, md: 20, lg: 26 },
              { xs: 10, sm: 15, md: 20, lg: 26 },
            ]}
          >
            <Col className="w-100" sm={{ span: 12 }}>
              <BBInput
                type="number"
                label={"House No. / Floor"}
                placeholder={"Enter your house/flat/building number"}
              />
            </Col>
            <Col className="w-100" sm={{ span: 12 }}>
              <BBInput
                label={"Road / Street"}
                placeholder={"Enter your street name"}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <BBInput label={"Area"} placeholder={"Enter your area"} />
            </Col>
            <Col xs={{ span: 24 }}>
              <BBInput label={"Premise Name"} placeholder={"Enter your premise name"} />
            </Col>
            <Col className="w-100" sm={{ span: 12 }}>
              <BBInput
                type="number"
                label={"Pincode"}
                placeholder={"Enter pincode for your area"}
              />
            </Col>
            <Col className="w-100 d-flex gap-2" sm={{ span: 12 }}>
              <BBInput label={"Country"} placeholder={"Select country"} />
              <BBInput label={"State"} placeholder={"Select state"} />
              <BBInput label={"City"} placeholder={"Select city"} />
            </Col>
          </Row>
        </TaxFormSection>
        <TaxFormSection
          title={"Residential Status"}
          description={
            "Please provide all info as per your government identity documents"
          }
        >
          <div className={styles.residentialStatus}>
            <p>Your residential status</p>
            <div>
              <h3 className="fw-semibold">Indian Resident</h3>
              <div className="flex gap-3 cursor-pointer" onClick={showModal}>
                <span>Change Residential Status</span>
                <span>&rarr;</span>
              </div>
            </div>
          </div>
        </TaxFormSection>
        {isModalOpen && (
          <div>
            {/* <div
              className="blur-overlay"
              onClick={() => setIsModalOpen(false)} // Close popup on outside click
            ></div> */}
            <ResidentialStatus isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
        )}
        <TaxFormSection
          img={
            <img
              src={ShieldDone}
              width={22}
              height={22}
              className="object-fit-contain"
            />
          }
          title={"Bank Details"}
          description={
            "It is mandatory to provide primary bank account details to e-file returns"
          }
        >
          {rows.map((row) => (
            <Row
              key={row.id}
              gutter={[
                { xs: 10, sm: 15, md: 20, lg: 26 },
                { xs: 10, sm: 15, md: 20, lg: 26 },
              ]}
              className="mb-4"
            >
              <Col className="w-100" sm={{ span: 12 }}>
                <BBInput
                  type="number"
                  label={`Account Number (${row.id})`}
                  placeholder="Enter your bank account number"
                />
              </Col>
              <Col className="w-100" sm={{ span: 12 }}>
                <BBInput
                  label="IFSC Code"
                  placeholder="Enter your branch IFSC code"
                />
              </Col>
              <Col className="w-100" sm={{ span: 12 }}>
                <BBInput
                  label="Bank Name"
                  placeholder="Enter name of your bank"
                />
              </Col>
              <Col className="w-100" sm={{ span: 12 }}>
                <BBInput
                  label="Type"
                  placeholder="Select account type"
                />
              </Col>
              <Col className="w-100 d-flex justify-content-end" sm={{ span: 24 }} >
                <BBButton
                  isDangerBtn
                  className="mt-3"
                  onClick={() => deleteRow(row.id)}
                >
                  Delete
                </BBButton>
              </Col>
            </Row>
          ))}

          <BBButton isEditBtn className="my-5" onClick={addRow}>
            Add another account
          </BBButton>
        </TaxFormSection>
      </div>

      <div className={styles.footer}>
        <BBButton onClick={() => Navigate("/pan-details")} isEditBtn>
          Previous
        </BBButton>
        <BBButton
          onClick={nextStep}
          variant="primary"
          icon={Icons.rightSideArrow}
          className={"flex-row-reverse gap-3"}
          size="large"
        >
          Go to Next
        </BBButton>
      </div>
    </main>
  );
};
