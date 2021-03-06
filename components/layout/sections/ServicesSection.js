import styles from "../../../styles/ServicesSection.module.css";
import { ServicesCard } from "../../layout/cards/ServicesCard";
export const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className="inner">
        <div className={styles.row}>
          <ServicesCard
            imgSrc="/images/internet-icon.svg"
            imgAlt="internet icon"
            width={50}
            height={50}
            title="Hjemmeside"
            description="Rask og brukervennlig hjemmeside med et rent og oversiktlig
            design. Alle hjemmesidene er grunnleggende
            søkemotoropptimaliserte."
            secondTitle="Teknologier jeg bruker"
            footerTags=" HTML5 | CSS3 | JavaScript | SASS | Wordpress"
          />

          <ServicesCard
            imgSrc="/images/design-tools-icon.svg"
            imgAlt="design tools icon"
            width={50}
            height={50}
            title="Design"
            description="Jeg designer logo, ikoner, bannere og komplett hjemmeside design.
            Jeg fokuserer på enkel, ren design som er lett forståelig og
            tiltalende."
            secondTitle="Teknologier jeg bruker"
            footerTags="Adobe Illustrator | Adobe photoshop"
          />

          <ServicesCard
            imgSrc="/images/wall-icon.svg"
            imgAlt="wall icon"
            width={50}
            height={50}
            title="Merkevarebygging"
            description=" Har du en nyetablert bedrift? Jeg kan hjelpe deg med å bygge opp
            din visuelle profil og identitet. Dette omfatter farger, logo,
            skrifttype og mye mer."
            secondTitle="Teknologier jeg bruker"
            footerTags="Prosessen omhandler alt av digitale verktøy som hjelper deg med å
            komme i gang med digital merkevarebygging"
          />
        </div>
      </div>
    </section>
  );
};
