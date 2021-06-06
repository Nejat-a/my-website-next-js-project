import styles from "../../../styles/PortfolioCard.module.css";

export const PortfolioCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  cardFooterText,
  href,
  btnText,
}) => {
  return (
    <div className={styles.col}>
      <div className={styles.colImgBig}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <h3 className={styles.colH3}>{title}</h3>
      <p className={styles.colMainP}>{description}</p>

      <p className={styles.colFooterP}>{cardFooterText}</p>
      <a href={href} className={styles.btnPurple}>
        {btnText}
      </a>
    </div>
  );
};
