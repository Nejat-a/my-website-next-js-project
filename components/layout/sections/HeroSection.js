import styles from "../../../styles/HeroSection.module.css";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className={styles.heroContent} id="top">
      <div className="inner">
        <div className={styles.heroText}>
          <h1>Webdesigner og frontend utvikler</h1>
          <p>Med fokus på en enkel design som er lett å forstå</p>
        </div>

        <div className={styles.heroImg}>
          <Image
            src="/images/hero-img-white.svg"
            alt="image of digital devices"
            width={1398}
            height={863}
          />
        </div>
      </div>
    </div>
  );
};
