import { BBButton, BBDatePicker, BBInput } from "@components";
import ShieldDone from "@images/icons/Shield-Done.svg";
import styles from "./IncomeTaxFiling.module.css";
import { Icons } from "@constants";
import { TaxFormSection } from "./TaxFormSection";
import { Col, Row, Tag, Upload, message } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import InterestIncome from "./InterestIncome";
import CapitalGainsIncome from "./CapitalGainsIncome";
import Professional from "./Professional/Professional";

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

export const IncomeSources = ({ prevStep, nextStep }) => {
  const [salaryIncomeManually, setsalaryIncomeManually] = useState(false)
  const [interestIncome, setInterestIncome] = useState(false)
  const [professionalIncome, setProfessionalIncome] = useState(true)
  const [capitalGainsIncome, setCapitalGainsIncome] = useState(false)

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <TaxFormSection
          img={
            <img
              src={ShieldDone}
              width={22}
              height={22}
              className="object-fit-contain"
            />
          }
          title={"Salary Income"}
          description={"You can add salary income from multiple jobs"}
        >
          <div className="d-flex flex-wrap gap-4">
            <Upload {...props}>
              <BBButton
                variant={"default"}
                className={clsx(styles.isEditBtnWrapper, "border-2")}
                isEditBtn
              >
                Upload Form 16
              </BBButton>
            </Upload>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setsalaryIncomeManually(true)}>
              Add Manually
            </BBButton>
          </div>

          {salaryIncomeManually &&
            <>
              <div
                className={clsx(
                  styles.BusinessIncomeWrapper,
                  "border-2 gap-5 d-flex flex-column mt-5"
                )}
              >
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                  <div
                    className={clsx(
                      styles.BusinessIncomeContentWrapper,
                      "d-flex align-items-start justify-content-between flex-column"
                    )}
                  >
                    <h4>Employer & TDS Details</h4>
                  </div>
                  <BBButton
                    className={clsx(
                      styles.BusinessIncomeSpanWrapper,
                      "d-flex"
                    )}
                    onClick={() => setsalaryIncomeManually(false)}
                  >
                    x
                  </BBButton>
                </div>
                {/* <div
                  className={clsx(
                    styles.BusinessIncomeInputWrapper,
                    "d-grid align-items-center"
                  )}
                > */}
                <Row
                  gutter={[
                    { xs: 10, sm: 15, md: 20, lg: 26 },
                    { xs: 10, sm: 15, md: 20, lg: 26 },
                  ]}
                >
                  <Col className="w-100" sm={{ span: 12 }}>
                    <BBInput
                      placeholder={"Placeholder text"}
                      label={"Search for employer name*"}
                      parentClassName={styles.BusinessIncomeInputLeftWrapper}
                    />
                  </Col>
                  <Col className="w-100" sm={{ span: 12 }}>
                    <BBInput
                      placeholder={""}
                      label={"Employer TAN*"}
                      parentClassName={styles.BusinessIncomeInputLeftWrapper}
                    />
                  </Col>
                  <Col className="w-100" sm={{ span: 12 }}>
                    <BBInput
                      placeholder={"Private"}
                      label={"Employer Category*"}
                      parentClassName={styles.BusinessIncomeInputLeftWrapper}
                    />
                  </Col>
                  <Col className="w-100" sm={{ span: 12 }}>
                    <BBInput label={"Total tax deducted at source*"} prefix={"₹"} />
                  </Col>
                </Row>
              </div>
              {/* </div> */}
              <h4 className="mt-5 mb-3">Salary Breakup</h4>
              <div
                className={clsx(
                  styles.BusinessIncomeWrapper,
                  "border-2 gap-5 d-flex flex-column"
                )}
              >
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                  <div
                    className={clsx(
                      styles.BusinessIncomeContentWrapper,
                      "d-flex align-items-start justify-content-between flex-column"
                    )}
                  >
                    <h4>1. Gross Salary</h4>
                  </div>
                  <h4>₹ 0</h4>
                </div>
                <div>
                  <BBInput label={"1(a). Salary as per section 17(1)*"} prefix={"₹"} />
                </div>
                <div>
                  <BBInput label={"1(b) Perquisites under section 17(2)*"} prefix={"₹"} />
                </div>
                <div>
                  <BBInput label={"1(c) Profits in lieu of salary under section 17(3)*"} prefix={"₹"} />
                </div>
                <div>
                  <BBInput label={"1(d) Income under section 89A - notified country"} prefix={"₹"} />
                </div>
                <div>
                  <BBInput label={"1(e) Income under section 89A - other than notified country"} prefix={"₹"} />
                </div>
                <div>
                  <BBInput label={"1(f) Income taxable during the previous year on which relief u/s 89A was claimed in any earlier previous year."} prefix={"₹"} />
                </div>
              </div>
              <div
                className={clsx(
                  styles.BusinessIncomeWrapper,
                  "border-2 gap-5 d-flex flex-column mt-5"
                )}
              >
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                  <div
                    className={clsx(
                      styles.BusinessIncomeContentWrapper,
                      "d-flex align-items-start justify-content-between flex-column"
                    )}
                  >
                    <h4>2. Exempt allowances under section 10*</h4>
                  </div>
                  <h4>₹ 0</h4>
                </div>
                <div
                  className={clsx(
                    styles.BusinessIncomeInputWrapper,
                    ""
                  )}
                >
                  <BBInput label={"sample*"} prefix={"₹"} />
                </div>
              </div>
              <div
                className={clsx(
                  styles.BusinessIncomeWrapper,
                  "border-2 gap-5 d-flex flex-column mt-5"
                )}
              >
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                  <div
                    className={clsx(
                      styles.BusinessIncomeContentWrapper,
                      "d-flex align-items-start justify-content-between flex-column"
                    )}
                  >
                    <h4>{`3. Balance (1 - 2)`}</h4>
                  </div>
                  <h4>₹ 0</h4>
                </div>
              </div>
              <div
                className={clsx(
                  styles.BusinessIncomeWrapper,
                  "border-2 gap-5 d-flex flex-column mt-5"
                )}
              >
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                  <div
                    className={clsx(
                      styles.BusinessIncomeContentWrapper,
                      "d-flex align-items-start justify-content-between flex-column"
                    )}
                  >
                    <h4>4. Deductions and Relief</h4>
                    <h4>4A Deduction under section 16</h4>
                  </div>
                </div>

                <div>
                  <BBInput label={"Standard Deductions 16(ia)"} prefix={"₹"} value="5000" />
                </div>
                <div>
                  <BBInput label={"Professional tax under section 16(iii)*"} prefix={"₹"} />
                </div>
                <div>
                  <BBInput label={"4B Relief under section 89*"} prefix={"₹"} />
                </div>
                <div>
                  <BBInput label={"1(d) Income under section 89A - notified country"} prefix={"₹"} />
                </div>
                <div>
                  <BBInput label={"4C Income claimed for relief under section 89A"} prefix={"₹"} />
                </div>
              </div>
              <div
                className={clsx(
                  styles.BusinessIncomeWrapper,
                  "border-2 gap-5 d-flex flex-column mt-5"
                )}
              >
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                  <div
                    className={clsx(
                      styles.BusinessIncomeContentWrapper,
                      "d-flex align-items-start justify-content-between flex-column"
                    )}
                  >
                    <h4>{`5. Income chargeable under head salaries (3-4A-4C)`}</h4>
                  </div>
                  <h4>₹ 0</h4>
                </div>
              </div>
            </>
          }
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
          title={"Interest Income"}
          description={
            "Interest earned from Savings Bank, FDs, Post Office Deposits, P2P, Bonds etc."
          }
          taxFormContent="d-flex flex-column grid-gap-24"
        >
          <div className="d-flex gap-4">
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setInterestIncome(true)}>
              Add Details
            </BBButton>
            {interestIncome && <BBButton variant={"primary"} isSecondaryBtn onClick={() => setInterestIncome(false)}>
              Cancle
            </BBButton>}
          </div>
          {interestIncome && <>
            <InterestIncome interestIncome={interestIncome} setInterestIncome={setInterestIncome} />
          </>}

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
          title={"Capital Gain Income"}
          description={
            "Sto  cks, Mutual Funds, Land, Bonds, RSUs, US Stocks, Jewellery and more"
          }
          taxFormContent="d-flex flex-column grid-gap-24"
        >

          <div className="d-flex gap-4">
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setCapitalGainsIncome(true)}>
              Add Details
            </BBButton>
            {capitalGainsIncome && <BBButton variant={"primary"} isSecondaryBtn onClick={() => setCapitalGainsIncome(false)}>
              Cancle
            </BBButton>}
          </div>
          {
            capitalGainsIncome && <CapitalGainsIncome />
          }
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
          title={"Professional, Freelancing and Business Income"}
          description={
            "For Doctors, Law yers, CAs, Other Professionals, Freelancers, Small & Medium businesses, Tutors, Influencers etc."
          }
          taxFormContent="d-flex flex-column grid-gap-24"
        >
          <div className="d-flex gap-4">
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setProfessionalIncome(true)}>
              Add Details
            </BBButton>
            {professionalIncome && <BBButton variant={"primary"} isSecondaryBtn onClick={() => setProfessionalIncome(false)}>
              Cancle
            </BBButton>}
          </div>
          {professionalIncome && <>
            <Professional professionalIncome={professionalIncome} setProfessionalIncome={setProfessionalIncome} />
          </>}


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
          title={"Interest, Dividend, Gaming and Other Income"}
          description={
            "Fixed Deposits, Bank Interest, P2P, Invoice Discounting, Agriculture, Online Gaming & any Other Incomes"
          }
          taxFormContent="d-flex flex-column grid-gap-24"
        >
          <div
            className={clsx(
              styles.BusinessIncomeWrapper,
              "border-2 gap-5 d-flex flex-column"
            )}
          >
            <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
              <div
                className={clsx(
                  styles.BusinessIncomeContentWrapper,
                  "d-flex align-items-start justify-content-between flex-column"
                )}
              >
                <h4>Interest Income from saving bank</h4>
                <p>
                  Please add the details if you have any recurring income as
                  interest earned from your bank including post-office savings
                  bank.
                </p>
              </div>
              <Tag
                color="rgba(255, 231, 203, 1)"
                className="p-sm fw-medium"
                style={{
                  color: "#FF9922",
                  padding: "6px 10px",
                  borderRadius: 10,
                }}
              >
                Business
              </Tag>
            </div>
            <div
              className={clsx(
                styles.BusinessIncomeInputWrapper,
                "d-grid align-items-center"
              )}
            >
              <BBInput
                placeholder={"Placeholder text"}
                label={"Name of Bank"}
                parentClassName={styles.BusinessIncomeInputLeftWrapper}
              />
              <BBInput label={"Amount"} prefix={"₹"} />
              <BBButton
                className={clsx(
                  styles.BusinessIncomeSpanWrapper,
                  "d-flex border-0"
                )}
              >
                {Icons.trash}
              </BBButton>
            </div>
          </div>
          <div
            className={clsx(
              styles.BusinessIncomeWrapper,
              "border-2 gap-5 d-flex flex-column"
            )}
          >
            <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
              <div
                className={clsx(
                  styles.BusinessIncomeContentWrapper,
                  "d-flex align-items-start justify-content-between flex-column"
                )}
              >
                <h4>Interest Income from saving bank</h4>
                <p>
                  Please add the details if you have any recurring income as
                  interest earned from your bank including post-office savings
                  bank.
                </p>
              </div>
              <Tag
                color="rgba(255, 231, 203, 1)"
                className="p-sm fw-medium"
                style={{
                  color: "#FF9922",
                  padding: "6px 10px",
                  borderRadius: 10,
                }}
              >
                Business
              </Tag>
            </div>
            <div
              className={clsx(
                styles.BusinessIncomeInputWrapper,
                "d-grid align-items-center"
              )}
            >
              <BBInput
                placeholder={"Placeholder text"}
                label={"Name of Bank"}
                parentClassName={styles.BusinessIncomeInputLeftWrapper}
              />
              <BBInput label={"Amount"} prefix={"₹"} />
              <BBButton
                className={clsx(
                  styles.BusinessIncomeSpanWrapper,
                  "d-flex border-0"
                )}
              >
                {Icons.trash}
              </BBButton>
            </div>
          </div>
          <div
            className={clsx(
              styles.BusinessIncomeWrapper,
              "border-2 gap-5 d-flex flex-column"
            )}
          >
            <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
              <div
                className={clsx(
                  styles.BusinessIncomeContentWrapper,
                  "d-flex align-items-start justify-content-between flex-column"
                )}
              >
                <h4>Interest Income from saving bank</h4>
                <p>
                  Please add the details if you have any recurring income as
                  interest earned from your bank including post-office savings
                  bank.
                </p>
              </div>
              <Tag
                color="rgba(255, 231, 203, 1)"
                className="p-sm fw-medium"
                style={{
                  color: "#FF9922",
                  padding: "6px 10px",
                  borderRadius: 10,
                }}
              >
                Business
              </Tag>
            </div>
            <div
              className={clsx(
                styles.BusinessIncomeInputWrapper,
                "d-grid align-items-center"
              )}
            >
              <BBInput
                placeholder={"Placeholder text"}
                label={"Name of Bank"}
                parentClassName={styles.BusinessIncomeInputLeftWrapper}
              />
              <BBInput label={"Amount"} prefix={"₹"} />
              <BBButton
                className={clsx(
                  styles.BusinessIncomeSpanWrapper,
                  "d-flex border-0"
                )}
              >
                {Icons.trash}
              </BBButton>
            </div>
          </div>
          <div
            className={clsx(
              styles.BusinessIncomeWrapper,
              "border-2 gap-5 d-flex flex-column"
            )}
          >
            <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
              <div
                className={clsx(
                  styles.BusinessIncomeContentWrapper,
                  "d-flex align-items-start justify-content-between flex-column"
                )}
              >
                <h4>Divident Income</h4>
                <p>
                  Please add the details if you have any recurring income as
                  interest earned from your bank including post-office savings
                  bank.
                </p>
              </div>
              <Tag
                color="rgba(255, 231, 203, 1)"
                className="p-sm fw-medium"
                style={{
                  color: "#FF9922",
                  padding: "6px 10px",
                  borderRadius: 10,
                }}
              >
                Business
              </Tag>
            </div>
            <div className="d-flex flex-column gap-3">
              <div
                className={clsx(
                  styles.BusinessIncomeDividentWrapper,
                  "d-flex align-items-sm-center flex-column flex-sm-row"
                )}
              >
                <BBInput
                  placeholder={"Placeholder text"}
                  label={"Narration"}
                  parentClassName={styles.BusinessIncomeInputLeftWrapper}
                />
                <div className={clsx("d-flex")}>
                  <BBDatePicker
                    placeholder={"DD/MM/YYYY"}
                    label={"Date of Receipt"}
                  />
                  <BBButton
                    className={clsx(
                      styles.BusinessIncomeSpanWrapper,
                      "d-flex border-0"
                    )}
                  >
                    {Icons.trash}
                  </BBButton>
                </div>
              </div>
              <BBInput
                label={"Amount"}
                prefix={"₹"}
                style={{ width: "fit-content" }}
              />
              <Link hrefLang="#" className="fw-medium">
                + Add more items
              </Link>
            </div>
          </div>
        </TaxFormSection>
      </div>
      <div className={styles.footer}>
        <BBButton onClick={prevStep} isEditBtn>
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
