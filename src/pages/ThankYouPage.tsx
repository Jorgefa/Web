// src/pages/ThankYouPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThankYouPage.module.css'; // Crearemos estilos

const ThankYouPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>¡MUCHAS GRACIAS!</h1>
      <p className={styles.message}>Hemos recibido tu confirmación.</p>
      <p className={styles.message}>¡Nos vemos en la boda!</p>
      <Link to="/" className={styles.backButton}>
        Volver a la invitación
      </Link>
    </div>
  );
};

export default ThankYouPage;