import { useEffect, useRef, useState } from "react";
import { Steps } from "antd";
import {
  PersonalInfo,
  IncomeSources,
  TaxSaving,
  TaxSummary,
} from "../../pages/IncomeTaxFiling";
import { Icons } from "@constants";
import styles from "./TaxFilingLayout.module.css";
import clsx from "clsx";
import { useMediaQuery } from "../../hooks/";
import { Container } from "@components";

export const TaxFilingLayout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepItemWidth, setStepItemWidth] = useState(0);
  const sidebarRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const updateStepItemWidth = () => {
      if (isMobile) {
        const sidebar = document.getElementById("step-sidebar");
        sidebarRef.current = sidebar;
        const stepItem = sidebarRef.current.querySelector(".ant-steps-item");
        setStepItemWidth(stepItem?.getBoundingClientRect().width);
        const newScrollLeft = currentStep * stepItemWidth;
        sidebarRef.current.scrollLeft = newScrollLeft;
      }
    };

    updateStepItemWidth();

    window.addEventListener("resize", updateStepItemWidth);

    return () => {
      window.removeEventListener("resize", updateStepItemWidth);
    };
  }, [isMobile, currentStep, stepItemWidth]);

  const StepTitle = ({ stepNumber, children }) => {
    return (
      <div className={styles.stepTitle}>
        <div className={styles.stepCount}>
          Step {stepNumber}/{stepsList.length}
        </div>
        {children}
      </div>
    );
  };

  const StepDescription = ({ substeps, children }) => {
    return (
      <div className={styles.stepExtra}>
        <p className={styles.stepDescription}>{children}</p>
        <div className={styles.subStepPills}>
          {Array.isArray(substeps) &&
            substeps.map((step, idx) => {
              return (
                <div key={idx} className={styles.subStepPill}>
                  {step}
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  const StepDot = (_, { index, status }) => {
    const dotClassName = clsx(styles.stepDot, {
      [styles.dotBlue]: index === 0,
      [styles.dotPeriwinkle]: index === 1,
      [styles.dotOrange]: index === 2,
      [styles.dotPurple]: index === 3,
      [styles.dotFinished]: status === "finish" || status === "process",
    });

    const dotIcons = [Icons.Profile, Icons.Bag, Icons.Discount, Icons.EyeShow];

    return <div className={dotClassName}>{dotIcons[index]}</div>;
  };

  const goToNextStep = () => {
    if (currentStep !== stepsList.length - 1) {
      setCurrentStep(currentStep + 1);
      if (isMobile) {
        sidebarRef.current.scrollLeft += stepItemWidth;
      }
    } else {
      console.log("Last Step");
    }
  };

  const goToPrevStep = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
      if (isMobile) {
        sidebarRef.current.scrollLeft -= stepItemWidth;
      }
    } else {
      console.log("First Step");
    }
  };

  const stepsList = [
    {
      title: <StepTitle stepNumber={1}>Personal Info</StepTitle>,
      element: <PersonalInfo prevStep={goToPrevStep} nextStep={goToNextStep} />,
      description: (
        <StepDescription substeps={["Aadhar Verification", "Pan Verification"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sollicitudin congue
        </StepDescription>
      ),
    },
    {
      title: <StepTitle stepNumber={2}>Income Sources</StepTitle>,
      element: (
        <IncomeSources prevStep={goToPrevStep} nextStep={goToNextStep} />
      ),
      description: (
        <StepDescription substeps={["Bank Accounts", "Form 16"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sollicitudin congue
        </StepDescription>
      ),
    },
    {
      title: <StepTitle stepNumber={3}>Tax Saving</StepTitle>,
      element: <TaxSaving prevStep={goToPrevStep} nextStep={goToNextStep} />,
      description: (
        <StepDescription substeps={["Donation", "Insurance"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sollicitudin congue
        </StepDescription>
      ),
    },
    {
      title: <StepTitle stepNumber={4}>Tax Summary</StepTitle>,
      element: <TaxSummary prevStep={goToPrevStep} nextStep={goToNextStep} />,
      description: (
        <StepDescription substeps={["Tax Summary", "Tax Slab", "Type of ITR"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sollicitudin congue
        </StepDescription>
      ),
    },
  ];

  return (
    <Container className={styles.container}>
      <div className={styles.page}>
        <aside id="step-sidebar" className={styles.sidebar}>
          <div className={styles.sidebarTitle}>
            <h4 className="text-center clr-white">Income Tax Filing</h4>
          </div>
          <Steps
            className={styles.steps}
            direction={isMobile ? "horizontal" : "vertical"}
            progressDot={StepDot}
            responsive={false}
            current={currentStep}
            items={stepsList.map((step) => {
              return {
                title: step.title,
                description: step.description,
              };
            })}
          />
        </aside>
        {stepsList[currentStep].element}
      </div>
    </Container>
  );
};
