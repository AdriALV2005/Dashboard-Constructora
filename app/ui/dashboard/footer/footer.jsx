import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>samara bonita</div>
        <div className={styles.text}>©  a canserbero</div>
      </div>
    </div>
  );
};

export default Footer;