// src/pages/RandomVideoPage.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './RandomVideoPage.module.css';
import { useTranslation } from '../context/TranslationContext';

// --- LISTA DE VIDEOS --- (Reemplaza con tus IDs reales)
const YOUTUBE_VIDEO_IDS = [
  '-H2TnrECM9M', // Rajoy
  'sepQ1zPB-QE', //Palmera
  'niRERC1k9yM', //PUUUMMMM
  'AH4Vx5zz7Go', //Dale Zelda
  'KRisz57AIjA', //Imodava
  'QNTZbJSQVis', //Parda
  'shtchHDxMH8', //Ninos
  'bRL_t0JBMlY', //Abuelo
  'saUPLHtyNhI', //PacoUmbral
  'ryxUeWEcUqE', //TheOffice
  'CEbVsBNAvGg', //Alcohol
];

const RandomVideoPage: React.FC = () => {
  const { translate } = useTranslation();
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

  // Función para seleccionar un video random (asegurándose que no sea el mismo)
  const selectRandomVideo = useCallback(() => {
    if (YOUTUBE_VIDEO_IDS.length === 0) {
      console.error("No hay IDs de video definidos.");
      return; // No hacer nada si la lista está vacía
    }

    let randomIndex: number;
    let newVideoId: string;

    // Si solo hay un video, siempre selecciona ese
    if (YOUTUBE_VIDEO_IDS.length === 1) {
        newVideoId = YOUTUBE_VIDEO_IDS[0];
    } else {
        // Bucle para asegurar que el nuevo ID sea diferente al actual
        do {
            randomIndex = Math.floor(Math.random() * YOUTUBE_VIDEO_IDS.length);
            newVideoId = YOUTUBE_VIDEO_IDS[randomIndex];
        } while (newVideoId === currentVideoId); // Repite si es el mismo que el actual
    }

    setCurrentVideoId(newVideoId);
  }, [currentVideoId]); // Depende de currentVideoId para la lógica de "no repetir"

  // Seleccionar un video inicial al cargar la página
  useEffect(() => {
    selectRandomVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <p className={styles.headerNames}>cris & jorge</p>
      </header>
      <div className={styles.pageContainer}>
        {currentVideoId ? (
          <div className={styles.videoWrapper}>
            {/* Iframe responsivo para embeber YouTube */}
            <iframe
              className={styles.videoIframe}
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`} // Autoplay y sin relacionados
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          // Mensaje mientras se selecciona el primer video o si hay error
          <p className={styles.loadingMessage}>{translate('Cargando video...', 'Loading video...')}</p>
        )}

        <div className={styles.buttonContainer}>
          <button onClick={selectRandomVideo} className={`${styles.button} ${styles.buttonPrimary}`}>
            {translate('Quiero más!', 'I want more!')}
          </button>
          <Link to="/" className={`${styles.button} ${styles.buttonPrimary}`}>
            {translate('No másss wey!', 'No moooore!')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomVideoPage;