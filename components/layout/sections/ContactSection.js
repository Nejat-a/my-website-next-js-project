import styles from "../../../styles/ContactSection.module.css";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
init("user_dw8ynCjhceKZV49uM4JYB");
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";

export const ContactSection = () => {
  const [error, seterror] = useState(null);
  const [successMsg, setsuccessMsg] = useState("");
  const schema = yup.object().shape({
    name: yup.string().required("Vennligst skriv ditt navn"),
    email: yup
      .string()
      .required("Vennligst skriv din epost adresse")
      .email("Vennligst skriv inn en gyldig epost adresse"),
    message: yup
      .string()
      .required("Vennligst skriv in din melding")
      .min(10, "Meldingen må være minimum 10 bokstaver"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const sendEmail = (params) => {
      const templateParams = {
        from_name: data.name,
        to_name: "Nejat",
        user_email: data.email,
        message: data.message,
      };
      emailjs
        .send("service_r5twsm8", "template_sakzrm3", templateParams)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setsuccessMsg(
              "Takk for at du tok kontakt! Eposten din blir besvart fortløpende :) siden blir laster på nytt om 3 sekunder"
            );
            setTimeout(() => document.location.reload(), 3000);
          } else {
            ("Eposten ble ikke sendt ");
          }
        });
    };

    console.log(data);
    sendEmail();
  }

  console.log(errors);

  return (
    <section className={styles.contact} id="kontakt">
      <div className="inner">
        <h2>
          Ønsker du et samarbeid eller har du noen spørsmål? Skriv til meg!
        </h2>

        <div className={styles.formArea}>
          <form onSubmit={handleSubmit(onSubmit)} id="form">
            <div className={styles.inputFields}>
              <div className={styles.inputName}>
                <label htmlFor="name">Navn</label>
                <input type="text" name="name" {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
              <div className={styles.inputEmail}>
                <label htmlFor="email">Epost</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
            </div>
            <div className={styles.textArea}>
              <label htmlFor="message">Din melding</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                {...register("message")}
              ></textarea>
              {errors.message && <span>{errors.message.message}</span>}
            </div>

            <div className={styles.successMsg} id="thankYou">
              {successMsg}
            </div>
            <button className={styles.btnPurpleFullWidth} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={styles.phoneArea}>
          <h2>Vil du heller slå av en part over telefon? Ring meg på:</h2>
          <a href="tel:98475482" className={styles.phone}>
            <FaMobileAlt /> 984 75 482
          </a>

          <p className={styles.phoneHrs}>
            {" "}
            (Telefontid: man-fre 10:00 - 17:00)
          </p>
        </div>
      </div>
    </section>
  );
};
