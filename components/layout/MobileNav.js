import Link from "next/link";
import styles from "../../styles/Header.module.css";

export const MobileNav = () => {
  return (
    <nav className={styles.mobileNav}>
      <ul>
        <li>
          <Link href="#about">Om meg</Link>
        </li>
        <li>
          <Link href="#portfolio">Porfolio</Link>
        </li>
        <li>
          <Link href="#kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};
