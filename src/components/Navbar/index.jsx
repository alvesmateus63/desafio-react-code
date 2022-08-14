import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>LOGO</div>
        <div className={styles.navbarMenu}>
          <div>Sobre</div>
          <div>Membros</div>
          <div>Contato</div>
          <div>Login</div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;