import styles from "../../../styles/ServicesCards.module.css";
export const ServicesCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  secondTitle,
  footerTags,
}) => {
  return (
    <div className={styles.col}>
      <div className={styles.colIMG}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <h3 className={styles.colH3}>{title}</h3>
      <p className={styles.ColMainP}>{description}</p>
      <h4 className={styles.colH4}>{secondTitle}</h4>
      <p className={styles.colFooterP}>{footerTags}</p>
    </div>
  );
};
