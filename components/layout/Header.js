import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { Navbar } from "../layout/Navbar";
import { useState, useEffect } from "react";
import { MobileNav } from "./MobileNav";
import { FaBars, FaTimes } from "react-icons/fa";
export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeNav = () => {
    setClick(false);
  };
  return (
    <header className={styles.mainHeader}>
      <div className="logo">
        <Link href="/">
          <img
            className={styles.logoImg}
            src="https://nejat.no/img/svg/nejat-logo-white.svg"
            alt="logo"
          />
        </Link>
      </div>

      <button className={styles.hamburger} onClick={handleClick}>
        {click ? (
          <FaTimes className={styles.navIcon} />
        ) : (
          <FaBars className={styles.navIcon} />
        )}
      </button>

      <Navbar />
      {click ? <MobileNav onClick={closeNav} /> : ""}
    </header>
  );
};
