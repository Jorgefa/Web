// src/pages/DesktopWarningPage.tsx
import React from 'react';
import styles from './DesktopWarningPage.module.css'; // Usaremos sus propios estilos

const DesktopWarningPage: React.FC = () => {
  return (
    <div className={styles.container}> {/* Renombramos de .desktopWarningContainer */}
      <div className={styles.warningBox}> {/* Renombramos de .desktopWarning */}
        <h1>¡Hola!</h1>
        <p>Esta invitación está diseñada para verse en el móvil, y solo en vertical!</p>
        <p>Por favor, abre el enlace en tu teléfono para una mejor experiencia.</p>
        {/* Podrías añadir un SVG de un móvil aquí si quieres */}
      </div>
    </div>
  );
};

export default DesktopWarningPage;