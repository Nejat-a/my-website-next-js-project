import styles from "../../../styles/PartnersSection.module.css";

export const PartnersSection = () => {
  return (
    <section className={styles.partners}>
      <div className="inner">
        <h2>Har samarbeidet med:</h2>
        <div className={styles.partnerLogoFirst}>
          <div>
            <img
              src="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152467/viken_logo_dark_text_owgsul.png"
              alt="viken låsteknikk logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152468/frax-dark-white_ekcjcd.png"
              alt="framx logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152468/bowling1-strommen-logo-dark-white_ayuizo.png"
              alt="bowling1 strømmen logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152467/kjellerholen-logo-dark_wuclcc.png"
              alt="kjellerholen logo"
            />
          </div>
          <div className={styles.bigLogo}>
            <img
              src="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152467/shadowball-logo-black-white_a5twt7.png"
              alt="shadowball logo"
            />
          </div>
          <div className={styles.bigLogo}>
            <img
              src="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152467/millennium_i1mrpx.png"
              alt="millennium logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
