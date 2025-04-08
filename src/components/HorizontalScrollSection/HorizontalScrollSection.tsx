// src/components/HorizontalScrollSection/HorizontalScrollSection.tsx
import React from 'react';
import styles from './HorizontalScrollSection.module.css';

interface HorizontalScrollSectionProps {
  children: React.ReactNode; // El contenido que irá dentro del sticky element
  heightMultiplier?: number; // Cuántas veces la altura de la ventana durará el scroll (default: 3 = 300vh)
  className?: string; // Para pasar clases adicionales al contenedor principal
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({
  children,
  heightMultiplier = 3, // Por defecto, 300vh de altura para scroll
  className = '',
}) => {
  const containerHeight = `${heightMultiplier * 100}vh`;

  return (
    // Contenedor principal alto que permite el scroll vertical "falso"
    <div
      className={`${styles.horizontalScrollContainer} ${className}`}
      style={{ height: containerHeight }} // Altura dinámica
    >
      {/* Elemento que se queda pegado */}
      <div className={styles.stickyElement}>
        {/* El contenido pasado como children se renderiza aquí */}
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;