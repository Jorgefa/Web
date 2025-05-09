// src/pages/GuestPage.tsx
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom'; // useParams para leer el slug, Link para el botón
import { getGuestInvitationBySlug } from '../services/firestoreService';
import { GuestInvitationData } from '../types/invitation';
import styles from './GuestPage.module.css'; // Crearemos estilos

const GUEST_SLUG_STORAGE_KEY = 'currentGuestSlug';

const GuestPage: React.FC = () => {
  const { guestSlug } = useParams<{ guestSlug: string }>();
  const [invitationData, setInvitationData] = useState<GuestInvitationData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Efecto para buscar datos cuando el slug cambie
  useEffect(() => {
    // Función asíncrona para buscar
    const fetchInvitation = async () => {
      if (!guestSlug) {
        setError('No se ha proporcionado identificador de invitado.');
        localStorage.removeItem(GUEST_SLUG_STORAGE_KEY);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      setInvitationData(null);
      localStorage.removeItem(GUEST_SLUG_STORAGE_KEY);

      try {
        const data = await getGuestInvitationBySlug(guestSlug);
        if (data) {
          setInvitationData(data);
          localStorage.setItem(GUEST_SLUG_STORAGE_KEY, guestSlug.toLowerCase());
        } else {
          setError(`No hemos encontrado una invitación para "${guestSlug}". Por favor, revisa el enlace.`);
        }
      } catch (err) {
        console.error(err);
        setError('Ocurrió un error al cargar tu invitación personalizada.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvitation();
  }, [guestSlug]); // Se ejecuta cada vez que guestSlug cambia

  // 4. Renderizado condicional
  if (isLoading) {
    return <div className={styles.statusMessage}>Cargando tu invitación...</div>;
  }

  if (error) {
    return <div className={styles.statusMessageError}>{error}</div>;
  }

  if (!invitationData) {
    // Este caso no debería ocurrir si la lógica anterior funciona, pero por si acaso
    return <div className={styles.statusMessageError}>Invitación no encontrada.</div>;
  }

  // 5. Renderizado de la página personalizada
  return (
    <div className={styles.pageWrapper}> {/* Renombrado para claridad */}
      {/* ----- Header ----- */}
      <header className={styles.pageHeader}>
        <p className={styles.headerNames}>cris & jorge</p>
      </header>
      <div className={styles.guestPageContainer}>
        {/* Podrías añadir un saludo genérico o usar el displayName */}
        {/* <h1 className={styles.holaMessage}>Hola</h1>
        <h1 className={styles.guestName}>{invitationData.displayName}!</h1> */}
        <div className={styles.guestMessage}>
          <ReactMarkdown>{invitationData.customMessage}</ReactMarkdown>
        </div>
        <Link to="/" className={styles.actionButton}>
          {invitationData.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default GuestPage;