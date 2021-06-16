import { hasBasePath } from "next/dist/next-server/lib/router/router";
import Link from "next/link";
import styles from "../../styles/Header.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.desktopNav}>
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
