import React from "react";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  const getCurrentYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerLogo}>
        <Link href="#top">
          <img src="https://nejat.no/img/svg/nejat-logo-white.svg" alt="logo" />
        </Link>
      </div>
      <p>Org: 925 241 601</p>

      <p>
        &copy;Copyright <span className={styles.year}>{getCurrentYear()}</span>{" "}
        nejat.no
      </p>
      <div className={styles.social}>
        <div className={styles.socialElement}>
          <a href="https://www.linkedin.com/in/nejat-baranji/">
            <FaLinkedinIn className={styles.footerIcon} />
          </a>
        </div>
        <div className={styles.socialElement}>
          <a href="https://github.com/Nejat-a">
            <FaGithub className={styles.footerIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};
