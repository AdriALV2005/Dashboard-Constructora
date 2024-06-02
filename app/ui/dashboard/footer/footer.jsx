import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.Logo}>samara bonita</div>
        <div className={styles.text}>© amamos a canserbero</div>
      </div>
    </div>
  );
};

export default Footer;