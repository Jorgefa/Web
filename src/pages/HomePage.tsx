// src/pages/HomePage.tsx (Sin clsx)
import React from 'react';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    // Aplicamos estilos del módulo al contenedor
    <div className={styles.container}>

      <section className={styles.section}>
        {/* Título Principal: Combinamos clases manualmente */}
        {/* Usamos template literals `` y ${} para insertar las clases */}
        <p>
          Cris & Jorge
        </p>
        <br />
        <br />
        <h1 className={styles.mainTitle}>
          ¡QUE
          <br />
          {/* Si "NOS" necesitara un estilo específico, se haría igual: */}
          <span className={styles.nosWordSpecial}>NOS</span>
          <br />
          CASA-
          <br />
          MOS!
        </h1>

        {/* Subtítulo: Solo necesita su clase del módulo */}
        <p className={`${styles.subtitle} ${styles.sectionAlignLeftSecondColumn}`}>
          A quien no le va a gustar celebrar el amor y una buena jarana.
        </p>
      </section>

      <section className={`${styles.section} ${styles.sectionAlignLeft}`}>
        {/* Título de Sección: Solo necesita su clase del módulo */}
        <h2 className={styles.sectionTitle}>
            30
            <br />
            <span className={styles.nosWordSpecial}>Agosto</span>
            <br />
            2025</h2>
        {/* Texto normal: Solo necesita heredar de <p> o body */}
        <p>13:30h</p>
        <p>En La Casona de Pitacum.</p>

        {/* Texto normal pero en BLANCO (usando clase global como string) */}
        {/* No necesita combinación, solo el nombre de la clase global */}
        <p className='text-color-light'>
           C. la Iglesia, 11, 24546 Arganza, León (Ejemplo texto blanco)
        </p>
         {/* Texto normal pero en NEGRO (usando clase global como string) */}
         <p className='text-color-dark'>
             (Ejemplo texto negro)
         </p>
      </section>

      <section className={styles.section}>
         {/* Otro título de sección: Solo necesita su clase del módulo */}
        <h2 className={styles.sectionTitle}>Sí, ESTO ES REAL...</h2>
        {/* Texto normal: Solo necesita heredar de <p> o body */}
        <p>¡MADRE MÍA QUÉ EMOCIÓN!</p>
      </section>

      {/* Footer: Solo necesita su clase del módulo */}
      <footer className={styles.footer}>
        <p>Cris & Jorge</p>
      </footer>
    </div>
  );
};

export default HomePage;