import { TaxFormSection } from "./TaxFormSection";
import { BBButton, BBCheckbox, BBInput, BBSelect } from "@components";
import styles from "./IncomeTaxFiling.module.css";
import ShieldDone from "@images/icons/Shield-Done.svg";
import { Icons } from "@constants";
import clsx from "clsx";
import { Badge, Tag } from "antd";

export const TaxSaving = ({ prevStep, nextStep }) => {
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
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
          title={"Popular Deductions"}
          description={
            "80C (PPF, Life Insurance, ELSS Mutual funds etc.), Health Insurance, NPS, Interest earned on Savings Bank Account"
          }
        >
          <div className="d-flex flex-column gap-4">
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
                  <h4>Section 80C - Investments</h4>
                  <p>
                    Add up all your 80C deductions and specify the total amount
                    here
                  </p>
                </div>
                <Tag
                  color="#FFD9F0"
                  className="p-sm fw-medium m-0"
                  style={{
                    color: "#FF22A7",
                    padding: "6px 10px",
                    borderRadius: 10,
                  }}
                >
                  Max Limit: ₹ 1,50,000
                </Tag>
              </div>
              <BBInput
                label={"Amount"}
                prefix={"₹"}
                style={{ width: "fit-content" }}
              />
            </div>
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
              <TaxFormSection
                title={
                  "Section 80D - Medical Insurance and Preventive Health Checkup"
                }
                description={
                  "Deductions for Medical Insurance or Preventive Health Check-Up fees or Medical Expenditure incurred by you."
                }
              >
                <div className="d-flex flex-column gap-4">
                  <BBSelect
                    placeholder="Parents age group"
                    parentClassName={styles.TaxSavingInvestmentsSelect}
                    options={options}
                  />
                  <BBCheckbox
                    className={clsx(
                      styles.TaxSavingInvestmentsCheckboxes,
                      "flex-row-reverse align-items-start justify-content-start w-100"
                    )}
                  >
                    Do you have a medical insurance for self, family or parents?
                  </BBCheckbox>
                  <BBCheckbox
                    className={clsx(
                      styles.TaxSavingInvestmentsCheckboxes,
                      "flex-row-reverse align-items-start justify-content-start w-100"
                    )}
                  >
                    Did you get a preventive health check up for self, family or
                    parents?
                  </BBCheckbox>
                </div>
              </TaxFormSection>
            </div>
          </div>
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
          title={"Popular Deductions"}
          description={
            "80C (PPF, Life Insurance, ELSS Mutual funds etc.), Health Insurance, NPS, Interest earned on Savings Bank Account"
          }
        >
          <div className="d-flex flex-column gap-4">
            <Badge.Ribbon text="Max Limit: ₹ 1,50,000" color="#FF22A7">
              <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <TaxFormSection
                  title={"Section 80C - Investments"}
                  description={
                    "Add up all your 80C deductions and specify the total amount here"
                  }
                >
                  <BBInput
                    prefix={"₹"}
                    parentClassName={styles.TaxSavingInvestmentsInput}
                  />
                </TaxFormSection>
              </div>
            </Badge.Ribbon>
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
              <TaxFormSection
                title={"More Deductions"}
                description={
                  "Donations to charitable organizations, educational loan, house rent for self employed and more"
                }
              ></TaxFormSection>
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
