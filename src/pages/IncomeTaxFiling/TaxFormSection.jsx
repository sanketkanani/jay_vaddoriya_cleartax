import styles from "./IncomeTaxFiling.module.css";

export const TaxFormSection = ({
  img,
  title,
  description,
  children,
  taxFormContent,
}) => {
  return (
    <div className={styles.taxFormSection}>
      <div className={styles.taxFormTitleWrap}>
        {img && <div className={styles.taxFormTitleImg}>{img}</div>}
        <div className={styles.taxFormTitleContent}>
          <h4>{title}</h4>
          <p className={styles.taxFormDesc}>{description}</p>
        </div>
      </div>
      <div className={taxFormContent}>{children}</div>
    </div>
  );
};
