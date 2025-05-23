// src/pages/ConfirmationPage.tsx
import React from 'react';
import ConfirmationForm from '../components/ConfirmationForm/ConfirmationForm'; // Crearemos este componente a continuación
import styles from './ConfirmationPage.module.css'; // Crearemos estilos básicos
import { useTranslation } from '../context/TranslationContext';

const ConfirmationPage: React.FC = () => {
  const { translate } = useTranslation();
  
  return (
    <div className={styles.pageWrapper}> {/* Renombrado para claridad */}
      {/* ----- Header ----- */}
      <header className={styles.pageHeader}>
        <p className={styles.headerNames}>cris & jorge</p>
      </header>
      <div className={styles.pageContainer}>
        <p className={`${styles.pageSubtitle} ${styles.indented}`}>
          {translate('¡Qué ganas de verte! Por favor, completa los datos de los asistentes.', 
                     'We can\'t wait to see you! Please, complete the attendee information.')}
        </p>
        <ConfirmationForm />
      </div>
    </div>
  );
};

export default ConfirmationPage;