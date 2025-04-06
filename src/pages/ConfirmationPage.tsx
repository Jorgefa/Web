// src/pages/ConfirmationPage.tsx
import React from 'react';
import ConfirmationForm from '../components/ConfirmationForm/ConfirmationForm'; // Crearemos este componente a continuación
import styles from './ConfirmationPage.module.css'; // Crearemos estilos básicos

const ConfirmationPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Confirmación de Asistencia</h1>
      <p className={styles.pageSubtitle}>
        ¡Qué ganas de verte! Por favor, completa los datos de los asistentes.
      </p>
      <ConfirmationForm />
    </div>
  );
};

export default ConfirmationPage;