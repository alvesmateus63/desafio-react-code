import React from "react";
import styles from "./login.module.scss";
import logo from "../../images/logo.png";

export const Login = () => {
  return (
    <section className={styles.loginBg}>
      <div className={styles.loginContainer}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}>
          <div className={styles.welcome}>
            <img src={logo} alt="" />
            <h2>Bem-vindo de volta</h2>
            <p>Para entrar digite seu email e sua senha</p>
          </div>
          <div className={styles.loginForm}>
            <input type="email" id="email" placeholder="Digite seu email" />
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
            <input type="button" value="Entrar" />
          </div>
        </div>
      </div>
    </section>
  );
};
