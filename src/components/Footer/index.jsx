import React from "react";
import NewsLetter from "../NewsLetter";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContact}>
          <p>(00) 0 0000-0000</p>
          <p>name@namejr.com.br</p>
          <p>UFJF - Rua José Lourenço Kelmer, s/n</p>
        </div>
        <div className={styles.footerSocial}>
          <p>@name</p>
          <p>@nothing</p>
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

export default Footer;
