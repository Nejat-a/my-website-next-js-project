import styles from "../../../styles/ServicesCards.module.css";
import Image from "next/image";
export const ServicesCard = ({
  imgSrc,
  imgAlt,
  width,
  height,
  title,
  description,
  secondTitle,
  footerTags,
}) => {
  return (
    <div className={styles.col}>
      <div className={styles.colIMG}>
        <Image src={imgSrc} alt={imgAlt} width={width} height={height} />
      </div>
      <h3 className={styles.colH3}>{title}</h3>
      <p className={styles.ColMainP}>{description}</p>
      <h4 className={styles.colH4}>{secondTitle}</h4>
      <p className={styles.colFooterP}>{footerTags}</p>
    </div>
  );
};
