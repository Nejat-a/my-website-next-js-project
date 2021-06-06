import CustomHead from "next/head";

export const Head = ({ title }) => {
  return (
    <CustomHead>
      <meta
        name="description"
        content="Nejat.no leverer tjenester innen hjemmeside og design løsninger. "
      />

      <meta
        name="keywords"
        content="nejat.no, nejat, design, logo, website, homepage, website, hjemmeside, ux, ui, user interface, user experience, seo, app, google serach, clean website, flat website, norway, norsk, norge"
      />
      <meta name="theme-color" content="#77018f" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <title>
        {title}
        {title ? " |" : ""} NEJAT WEB&DESIGN
      </title>
      <link rel="icon" href="https://nejat.no/img/fav.png" />
    </CustomHead>
  );
};
