import styles from "../../../styles/HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div className={styles.heroContent} id="top">
      <div className="inner">
        <div className={styles.heroText}>
          <h1>Webdesigner og frontend utvikler</h1>
          <p>Med fokus på en enkel design som er lett å forstå</p>
        </div>

        <div className={styles.heroImg}>
          <img
            src="https://nejat.no/img/svg/hero-img-white.svg"
            alt="image of digital devices"
          />
        </div>
      </div>
    </div>
  );
};
