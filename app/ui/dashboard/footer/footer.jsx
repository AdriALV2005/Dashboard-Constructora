import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>NextAdmin 2.0</div>
        <div className={styles.text}>© Grupo 1</div>
      </div>
    </div>
  );
};

export default Footer;