// src/pages/ConfirmationPage.tsx
import React from 'react';
import ConfirmationForm from '../components/ConfirmationForm/ConfirmationForm'; // Crearemos este componente a continuación
import styles from './ConfirmationPage.module.css'; // Crearemos estilos básicos

const ConfirmationPage: React.FC = () => {
  return (
    <div className={styles.pageWrapper}> {/* Renombrado para claridad */}
      {/* ----- Header ----- */}
      <header className={styles.pageHeader}>
        <p className={styles.headerNames}>cris & jorge</p>
      </header>
      <div className={styles.pageContainer}>
        <p className={`${styles.pageSubtitle} ${styles.indented}`}>
          ¡Qué ganas de verte! Por favor, completa los datos de los asistentes.
        </p>
        <ConfirmationForm />
      </div>
    </div>
  );
};

export default ConfirmationPage;