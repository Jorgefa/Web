// src/pages/ThankYouPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThankYouPage.module.css'; // Crearemos estilos

const ThankYouPage: React.FC = () => {
  return (
    <div className={styles.pageWrapper}> {/* Renombrado para claridad */}
      {/* ----- Header ----- */}
      <header className={styles.pageHeader}>
        <p className={styles.headerNames}>cris & jorge</p>
      </header>
      <div className={styles.pageContainer}>
        <div className={styles.sectionTitle}>
          <h1 className={`${styles.titleBlock}  ${styles.sizeHero} ${styles.fontDisplay}`}>MUCHAS</h1>
          <h1 className={`${styles.titleBlock}  ${styles.sizeHero}`}>GRA-</h1>
          <h1 className={`${styles.titleBlock}  ${styles.sizeHero}`}>CIAS!!</h1>
        </div>
        <Link to="/" className={`${styles.button}  ${styles.buttonPrimary}`}>
          Volver
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;