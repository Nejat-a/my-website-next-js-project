import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { Navbar } from "../layout/Navbar";
import { useState, useEffect } from "react";
import { MobileNav } from "./MobileNav";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
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
          <a>
            <Image
              src="/images/nejat-logo-white.svg"
              alt="logo"
              width={50}
              height={58}
            />
          </a>
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
