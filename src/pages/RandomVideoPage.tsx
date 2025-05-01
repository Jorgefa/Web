// src/pages/RandomVideoPage.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // Para el botón de volver
import styles from './RandomVideoPage.module.css';

// --- LISTA DE VIDEOS --- (Reemplaza con tus IDs reales)
const YOUTUBE_VIDEO_IDS = [
  '-H2TnrECM9M', // Rajoy
  'dQw4w9WgXcQ', // Rick Astley
  'ZZ5LpwO-An4', // Heman
  'sepQ1zPB-QE', //Palmera
  'niRERC1k9yM', //PUUUMMMM
  'AH4Vx5zz7Go', //Dale Zelda
  'KRisz57AIjA', //Imodava
  'QNTZbJSQVis', //Parda
  'shtchHDxMH8', //Ninos
  'bRL_t0JBMlY', //Abuelo
  'Ngfw_qg6UUU', //ContigoNoBicho
  'saUPLHtyNhI', //PacoUmbral
  'ryxUeWEcUqE', //TheOffice


  // Añade más IDs aquí...
];
// --- FIN LISTA ---

const RandomVideoPage: React.FC = () => {
  const navigate = useNavigate();
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
  }, []); // El [] asegura que solo se ejecute una vez al montar (pero da warning por selectRandomVideo)
  // Nota: El warning de exhaustive-deps es porque selectRandomVideo usa currentVideoId.
  // En este caso específico del montaje inicial, está bien ignorarlo o refactorizar
  // selectRandomVideo para que no dependa del state si se llama solo al inicio.
  // Para simplificar, lo dejamos así por ahora.

  const handleGoBack = () => {
    navigate(-1); // Navega a la página anterior en el historial
  };

  return (
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
        <p className={styles.loadingMessage}>Cargando video...</p>
      )}

      <div className={styles.buttonContainer}>
        <button onClick={selectRandomVideo} className={`${styles.button} ${styles.buttonPrimary}`}>
          Otro Video Random
        </button>
        <button onClick={handleGoBack} className={`${styles.button} ${styles.buttonPrimary}`}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default RandomVideoPage;