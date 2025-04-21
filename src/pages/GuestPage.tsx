// src/pages/GuestPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams para leer el slug, Link para el botón
import { getGuestInvitationBySlug } from '../services/firestoreService';
import { GuestInvitationData } from '../types/invitation';
import styles from './GuestPage.module.css'; // Crearemos estilos

const GuestPage: React.FC = () => {
  // 1. Obtener el slug de la URL
  const { guestSlug } = useParams<{ guestSlug: string }>(); // Obtiene el valor de :guestSlug

  // 2. Estados para datos, carga y error
  const [invitationData, setInvitationData] = useState<GuestInvitationData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Efecto para buscar datos cuando el slug cambie
  useEffect(() => {
    // Función asíncrona para buscar
    const fetchInvitation = async () => {
      if (!guestSlug) {
        setError('No se ha proporcionado identificador de invitado.');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      setInvitationData(null); // Limpiar datos anteriores

      try {
        const data = await getGuestInvitationBySlug(guestSlug);
        if (data) {
          setInvitationData(data);
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
    <div className={styles.guestPageContainer}>
      {/* Podrías añadir un saludo genérico o usar el displayName */}
      <h1 className={styles.holaMessage}>Hola</h1>
      <h1 className={styles.guestName}>{invitationData.displayName}!</h1>
      <p className={styles.guestMessage}>{invitationData.customMessage}</p>
      <Link to="/" className={styles.actionButton}>
        {invitationData.buttonText}
      </Link>
    </div>
  );
};

export default GuestPage;