import Link from "next/link";
import styles from "../../styles/Header.module.css";

export const MobileNav = ({ onClick }) => {
  return (
    <nav className={styles.mobileNav}>
      <ul>
        <li onClick={onClick}>
          <Link href="#about">Om meg</Link>
        </li>
        <li onClick={onClick}>
          <Link href="#portfolio">Porfolio</Link>
        </li>
        <li onClick={onClick}>
          <Link href="#kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};
