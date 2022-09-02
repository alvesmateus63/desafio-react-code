import React from "react";
import NewsLetter from "../NewsLetter";
import styles from "./Footer.module.scss";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import phone from "../../images/phone.svg";
import envelope from "../../images/envelope.svg";
import location from "../../images/location.svg";
import logo from "../../images/logo.png";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="MedJunior" />
        </div>
        <div className={styles.footerContact}>
          <div>
            <h3>Nossas Redes Social</h3>
            <p>
              <img src={instagram} alt="Instagram" /> @med.jr
            </p>
            <p>
              <img src={linkedin} alt="Linkedin" />
              /med-junior
            </p>
          </div>
          <div>
            <h3>Entre em Contato</h3>
            <p>
              <img src={phone} alt="phone" />
              (00) 0 0000-0000
            </p>
            <p>
              <img src={envelope} alt="mail" />
              contato@medjr.com.br
            </p>
            <p>
              <img src={location} alt="location" />
              UFJF - Rua José Lourenço Kelmer, s/n
            </p>
          </div>
        </div>
        <div className={styles.footerNewsLetter}>
          <NewsLetter />
        </div>
      </div>
      <div className={styles.footerDevBy}>
        <p>
          Desenvolvido por <span>Code Jr</span>
        </p>
      </div>
    </footer>
  );
};
