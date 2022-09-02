import React from "react";
import styles from "./NewsLetter.module.scss";

const NewsLetter = () => {
  return (
    <section className={styles.newsContainer}>
      <h3>Assine nossa NewsLetter</h3>
      <form className={styles.formContainer}>
        <label htmlFor="name">Nome: *</label>
        <input id="name" type="text" placeholder="João da Silva" />
        <label htmlFor="email">Email: *</label>
        <input id="email" type="email" placeholder="joao@email.com.br" />
        <input type="button" value="Assinar" />
        <span>
          Prometemos não utilizar suas informações de contato para enviar
          qualquer tipo de SPAM.
        </span>
      </form>
    </section>
  );
};

export default NewsLetter;
