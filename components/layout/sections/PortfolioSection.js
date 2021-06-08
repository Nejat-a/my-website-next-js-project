import styles from "../../../styles/PortfolioSection.module.css";
import { PortfolioCard } from "../cards/PortfolioCard";

export const PortfolioSection = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="inner">
        <h2>Portfolio</h2>
        <div className={styles.row}>
          <PortfolioCard
            imgSrc="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152285/framx-laptop-view-sm_ahspf6.png"
            imgAlt="Framx.no website"
            title="Framx.no"
            description="FramX er en utrolig spennende bedrift som lager kryssplatform mobil apper. Det var en stor glede å designe og utvikle hjemmside for dem."
            cardFooterText="HTML | CSS |JavaScript"
            href="https://www.framx.no/"
            btnText="Besøk siden"
          />
          <PortfolioCard
            imgSrc="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152324/bowling1-strommen-laptop-view_ad9f6k.png"
            imgAlt="Bowling 1 strømmen website"
            title="Bowling1 Strømmen"
            description="Utviklet ny hjemmeside for Bowling 1 på Strømmen."
            cardFooterText="HTML | CSS |JavaScript | PHP | Wordpress"
            href="https://www.xn--bowling1strmmen-gub.no/"
            btnText="Besøk siden"
          />
        </div>
        <div className={styles.row}>
          <PortfolioCard
            imgSrc="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152412/shadowball-laptop-view_tnycda.png"
            imgAlt="Shadowball website"
            title="ShadowBall"
            description="Jeg designet ny landingpage og produktside for ShadowBall. Jeg har hovedansvaret for videreutvikling av nettbutikken."
            cardFooterText="HTML | CSS |JavaScript | PHP | Wordpress"
            href="https://shadowball.co.za/"
            btnText="Besøk siden"
          />
          <PortfolioCard
            imgSrc="https://res.cloudinary.com/djbsy9lr5/image/upload/v1623152324/viken-laptop-view-sm_qyuwmq.png"
            imgAlt="Vikenlasteknikk website"
            title="Vikenlasteknikk"
            description="Viken Låsteknikk leverer varer og tjenester innen lås og sikkerhet. Siden inneholder en blogg som er bygd på Wordpress."
            cardFooterText="HTML | CSS |JavaScript"
            href="https://www.viken-lasteknikk.no/"
            btnText="Besøk siden"
          />
        </div>
      </div>
    </section>
  );
};
