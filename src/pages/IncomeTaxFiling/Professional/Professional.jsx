import { BBButton } from "@components"
import { Tag } from "antd"
import clsx from "clsx"
import styles from "../IncomeTaxFiling.module.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import ProfessionalIncome44ADA from "./SubDetails/ProfessionalIncome44ADA";
import BussinessIncome44ADA from "./SubDetails/BusinessIncome44AD";
import RegularBusiness from "./SubDetails/RegularBusiness";


const Professional = () => {
    const [professionalIncome, setProfessionalIncome] = useState(false)
    const [businessIncome, setBusinessIncome] = useState(false)
    const [regularBusiness, setRegularBusiness] = useState(false)
    return (
        <>
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                    <h4>Professional Income(Revenue &lt; &#x20b9; 50 lakhs)</h4>
                </div>
                <ul className="">
                    <li>
                        Revenue/Receipts to be under &#x20b9; 50 lakhs (Section 44ADA)
                    </li>
                    <li>
                        For freelancers, doctors, lawyers, designers, photographers and
                        consultants
                    </li>
                </ul>
                <div
                    className={clsx(
                        styles.BusinessIncomeWrapperProfessional,
                        "align-items-start justify-content-between d-flex flex-column flex-sm-row gap-3"
                    )}
                >
                    <p className="clr-dark fw-medium w-50">
                        Presumptive Professional Income
                    </p>
                    <div className="d-flex gap-5">
                        <p className="clr-black p fw-medium">₹5</p>
                        <div
                            hrefLang="#"
                            className="clr-black text-decoration-underline p fw-medium cursor-pointer"
                            onClick={() => setProfessionalIncome(true)}
                        >
                            Edit
                        </div>
                        <Link
                            hrefLang="#"
                            className="clr-black text-decoration-underline p fw-medium"
                        >
                            Remove
                        </Link>
                    </div>
                </div>
            </div>
            {professionalIncome && <ProfessionalIncome44ADA />}
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                    <h4>Business Income(Revenue &lt; &#x20b9; 2 crores)</h4>
                    <Tag
                        color="rgba(255, 231, 203, 1)"
                        className="p-sm fw-medium"
                        style={{
                            color: "#FF9922",
                            padding: "6px 10px",
                            borderRadius: 10,
                        }}
                    >
                        Tag Text
                    </Tag>
                </div>
                <ul className="">
                    <li>
                        Revenue/Receipts to be under &#x20b9; 50 lakhs (Section 44ADA)
                    </li>
                    <li>
                        For freelancers, doctors, lawyers, designers, photographers and
                        consultants
                    </li>
                </ul>
                <BBButton
                    variant={"default"}
                    className={clsx(styles.isEditBtnWrapper, "border-2")}
                    isEditBtn
                    onClick={() => setBusinessIncome(true)}
                >
                    Add Entry
                </BBButton>
            </div>
            {businessIncome && <BussinessIncome44ADA />}
            <div className={clsx(styles.BusinessIncomeWrapper, "border-2")}>
                <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row gap-3">
                    <h4>{`Professional Income(Revenue > ₹ 75 lakhs) Or Business Income(Revenue > ₹ 3 crores)`}</h4>
                    <Tag
                        color="rgba(255, 231, 203, 1)"
                        className="p-sm fw-medium"
                        style={{
                            color: "#FF9922",
                            padding: "6px 10px",
                            borderRadius: 10,
                        }}
                    >
                        Tag Text
                    </Tag>
                </div>
                <ul className="">
                    <li>
                        For large businesses or professsions, FnO investors and others.
                    </li>
                </ul>
                <BBButton
                    variant={"default"}
                    className={clsx(styles.isEditBtnWrapper, "border-2")}
                    isEditBtn
                    onClick={() => setRegularBusiness(true)}
                >
                    Add Entry
                </BBButton>
                
            </div>
            {regularBusiness && <RegularBusiness />}

        </>
    )
}

export default Professional