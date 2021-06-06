import styles from "../../../styles/PartnersSection.module.css";

export const PartnersSection = () => {
  return (
    <section className={styles.partners}>
      <div className="inner">
        <h2>Har samarbeidet med:</h2>
        <div className={styles.partnerLogoFirst}>
          <div>
            <img
              src="https://nejat.no/img/logo-black-and-white/viken%20logo%20dark%20text.png"
              alt="viken låsteknikk logo"
            />
          </div>
          <div>
            <img
              src="https://nejat.no/img/logo-black-and-white/frax-dark-white.png"
              alt="framx logo"
            />
          </div>
          <div>
            <img
              src="https://nejat.no/img/logo-black-and-white/bowling1-strommen-logo-dark-white.png"
              alt="bowling1 strømmen logo"
            />
          </div>
          <div>
            <img
              src="https://nejat.no/img/logo-black-and-white/kjellerholen-logo-dark.png"
              alt="kjellerholen logo"
            />
          </div>
          <div className={styles.bigLogo}>
            <img
              src="https://nejat.no/img/logo-black-and-white/shadowball-logo-black-white.png"
              alt="shadowball logo"
            />
          </div>
          <div className={styles.bigLogo}>
            <img
              src="https://nejat.no/img/logo-black-and-white/millennium.png"
              alt="millennium logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
