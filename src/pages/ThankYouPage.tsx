// src/pages/ThankYouPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThankYouPage.module.css'; // Crearemos estilos
import crisfer from '../assets/gifs/crisfer.gif'; // Importa la imagen de crisfer
import { useTranslation } from '../context/TranslationContext';

const ThankYouPage: React.FC = () => {
  const { translate } = useTranslation();
  
  return (
    <div className={styles.pageWrapper}> {/* Renombrado para claridad */}
      {/* ----- Header ----- */}
      <header className={styles.pageHeader}>
        <p className={styles.headerNames}>cris & jorge</p>
      </header>
      <div className={styles.pageContainer}>
        <img src={crisfer} alt="Fer gif" className={styles.thankYouImage}/>
        <div className={styles.sectionTitle}>
          <h1 className={`${styles.titleBlock}  ${styles.sizeHero} ${styles.fontDisplay}`}>
            {translate('MUCHAS', 'THANK')}
          </h1>
          <h1 className={`${styles.titleBlock}  ${styles.sizeHero}`}>
            {translate('GRA-', 'YOU')}
          </h1>
          <h1 className={`${styles.titleBlock}  ${styles.sizeHero}`}>
            {translate('CIAS!!', 'SO MUCH!!')}
          </h1>
        </div>
        <Link to="/" className={`${styles.button}  ${styles.buttonPrimary}`}>
          {translate('Volver', 'Back')}
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;