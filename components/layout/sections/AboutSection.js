import styles from "../../../styles/AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section className={styles.about} id="about">
      <div className="inner">
        <div className={styles.profileImg}>
          <img
            src="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623875779/profile-img-me_cgvpoo.png"
            alt="photo of nejat"
          />
        </div>
        <h2>Hei. Det er hyggelig at du er innom :)</h2>
        <p>
          Mitt navn er Nejat. Jeg er en frontend utvikler og webdesigner. Jeg
          har hjulpet flere små og mellomstore bedrifter med hjemmeside,
          nettbutikk og designløsninger.
        </p>
      </div>
    </section>
  );
};
