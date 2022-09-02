import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.navbarMenu}>
          <div>
            <Link className={styles.link} to="/">
              Início
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/membros">
              Membros
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
