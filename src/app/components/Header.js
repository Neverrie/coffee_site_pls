import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.jpg" alt="Логотип" className={styles.logo} />
      </div>
      <div className={styles.name}>
        <h1>Coffee Corner</h1>
      </div>
    </div>
  );
};

export default Header;
