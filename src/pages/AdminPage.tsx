// src/pages/AdminPage.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom'; // Para enlazar a detalles (si implementamos esa ruta)
import { getAllConfirmations } from '../services/firestoreService'; // Nueva función que crearemos
import { ConfirmationFormData, GuestData } from '../types/confirmation';
import styles from './AdminPage.module.css';

// Extendemos el tipo para incluir el ID del documento de Firestore
interface ConfirmationDoc extends ConfirmationFormData {
  id: string;
}

const AdminPage: React.FC = () => {
  const [confirmations, setConfirmations] = useState<ConfirmationDoc[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Efecto para cargar los datos al montar la página
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getAllConfirmations();
        setConfirmations(data);
      } catch (err) {
        console.error("Error fetching confirmations:", err);
        setError("No se pudieron cargar las confirmaciones. Inténtalo de nuevo más tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío asegura que se ejecute solo una vez

  // Calculamos los totales usando useMemo para eficiencia
  const summary = useMemo(() => {
    if (!confirmations || confirmations.length === 0) {
      return {
        totalGuests: 0,
        totalAdults: 0,
        totalKids: 0,
        totalCarne: 0,
        totalPescado: 0,
        busNoNecesito: 0,
        busSiPronto: 0,
        busSiCierre: 0,
        totalAllergies: 0,
        totalComments: 0,
      };
    }

    let totalGuests = 0;
    let totalAdults = 0;
    let totalKids = 0;
    let totalCarne = 0;
    let totalPescado = 0;
    let busNoNecesito = 0;
    let busSiPronto = 0;
    let busSiCierre = 0;
    let totalAllergies = 0;
    let totalComments = 0;

    confirmations.forEach(conf => {
      conf.guests.forEach(guest => {
        totalGuests++;
        if (guest.tipo === 'adulto') {
          totalAdults++;
          // Contar platos y bus solo para adultos
          if (guest.plato === 'carne') totalCarne++;
          if (guest.plato === 'pescado') totalPescado++;
          if (guest.transporteVuelta === 'no_necesito') busNoNecesito++;
          if (guest.transporteVuelta === 'si_pronto') busSiPronto++;
          if (guest.transporteVuelta === 'si_cierre') busSiCierre++;
        } else if (guest.tipo === 'niño') {
          totalKids++;
        }

        // Contar alergias y comentarios si el campo no está vacío
        if (guest.intolerancias && guest.intolerancias.trim() !== '') {
          totalAllergies++;
        }
        if (guest.comentarios && guest.comentarios.trim() !== '') {
          totalComments++;
        }
      });
    });

    return {
      totalGuests,
      totalAdults,
      totalKids,
      totalCarne,
      totalPescado,
      busNoNecesito,
      busSiPronto,
      busSiCierre,
      totalAllergies,
      totalComments,
    };
  }, [confirmations]); // Recalcular solo si 'confirmations' cambia


  // --- Renderizado ---
  if (isLoading) {
    return <div className={styles.statusMessage}>Cargando datos...</div>;
  }

  if (error) {
    return <div className={styles.statusMessage} style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div className={styles.adminContainer}>
      <h1 className={styles.adminTitle}>Panel de Confirmaciones</h1>

      {/* --- Sección Resumen --- */}
      <section className={styles.summarySection}>
        <h2 className={styles.sectionTitle}>Resumen General</h2>
        <div className={styles.summaryGrid}>
            <p><strong>Invitados Totales:</strong> {summary.totalGuests}</p>
            <p><strong>Adultos:</strong> {summary.totalAdults}</p>
            <p><strong>Niños:</strong> {summary.totalKids}</p>
            <p><strong>Platos Carne:</strong> {summary.totalCarne}</p>
            <p><strong>Platos Pescado:</strong> {summary.totalPescado}</p>
            <p><strong>Bus - No Necesitan:</strong> {summary.busNoNecesito}</p>
            <p><strong>Bus - Sí (Pronto):</strong> {summary.busSiPronto}</p>
            <p><strong>Bus - Sí (Cierre):</strong> {summary.busSiCierre}</p>
            <p><strong>Personas con Alergias/Int.:</strong> {summary.totalAllergies}</p>
            <p><strong>Personas con Comentarios:</strong> {summary.totalComments}</p>
        </div>
      </section>

      {/* --- Sección Lista de Envíos --- */}
      <section>
        <h2 className={styles.sectionTitle}>Envíos Recibidos ({confirmations.length})</h2>
        {confirmations.length === 0 ? (
          <p>Aún no hay confirmaciones.</p>
        ) : (
          <ul className={styles.confirmationList}>
            {confirmations.map((conf) => {
              // Generar el nombre para la lista
              const guestNames = conf.guests.map(g => g.nombre.trim()).filter(Boolean).join(', ');
              const displayName = `Form_${guestNames || 'Invitado(s) sin nombre'}`;

              return (
                <li key={conf.id} className={styles.confirmationItem}>
                  {/* Enlazamos a una futura ruta de detalle */}
                  {/* Por ahora, solo mostramos el nombre */}
                  <span className={styles.formName}>{displayName}</span>
                  <span className={styles.submitDate}>
                    (Enviado: {conf.submittedAt?.toDate().toLocaleString() ?? 'Fecha desconocida'})
                  </span>
                  {/* Podríamos añadir un botón/link aquí para ver detalles */}
                  {/* <Link to={`/adminNovios/${conf.id}`}>Ver Detalles</Link> */}
                  <button onClick={() => alert(`Detalles para ${conf.id}:\n${JSON.stringify(conf.guests, null, 2)}`)} className={styles.detailsButton}>
                      Ver Detalles (Simple)
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
       <p className={styles.securityWarning}>
           <strong>Atención:</strong> Esta página no es segura. No compartas esta URL. Considera añadir autenticación.
       </p>
    </div>
  );
};

export default AdminPage;