import React, { useState, useEffect, useMemo, useCallback  } from 'react';
import { getAllConfirmations, deleteConfirmation } from '../services/firestoreService'; // <-- Importa deleteConfirmation
import { ConfirmationFormData } from '../types/confirmation';
import styles from './AdminPage.module.css';

// Extendemos el tipo para incluir el ID del documento de Firestore
interface ConfirmationDoc extends ConfirmationFormData {
  id: string;
}

const AdminPage: React.FC = () => {
  const [confirmations, setConfirmations] = useState<ConfirmationDoc[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteStatus, setDeleteStatus] = useState<{ [key: string]: 'deleting' | 'error' | null }>({}); // Estado para feedback de borrado


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
          if (guest.transporte === 'no_necesito') busNoNecesito++;
          if (guest.transporte === 'si_pronto') busSiPronto++;
          if (guest.transporte === 'si_cierre') busSiCierre++;
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


  // --- NUEVA FUNCIÓN handleDelete ---
  const handleDelete = useCallback(async (docId: string, displayName: string) => {
    // 1. Confirmación del usuario
    const confirmDelete = window.confirm(
      `¿Estás seguro de que quieres eliminar el registro "${displayName}"?\n¡Esta acción no se puede deshacer!`
    );

    if (confirmDelete) {
      // Marcar como 'borrando' para feedback visual (opcional)
      setDeleteStatus(prev => ({ ...prev, [docId]: 'deleting' }));
      setError(null); // Limpiar errores anteriores

      try {
        // 2. Llamar al servicio de borrado
        await deleteConfirmation(docId);

        // 3. Actualizar estado local para reflejar el borrado
        setConfirmations(prevConfirmations =>
          prevConfirmations.filter(conf => conf.id !== docId)
        );
         setDeleteStatus(prev => ({ ...prev, [docId]: null })); // Limpiar estado de borrado

      } catch (err) {
        console.error(`Error al borrar el documento ${docId}:`, err);
        setError(`Error al borrar el registro "${displayName}". Inténtalo de nuevo.`);
        setDeleteStatus(prev => ({ ...prev, [docId]: 'error' })); // Marcar como error
      }
    }
  }, []); // useCallback para evitar recreaciones innecesarias

  // --- Renderizado ---
  if (isLoading) { /* ... */ }
  // Mostramos error general o de borrado si existe
  const displayError = error || Object.values(deleteStatus).some(s => s === 'error')
    ? error || "Hubo un error al intentar borrar uno o más registros."
    : null;

  if (displayError && !isLoading) { // Mostrar error si no está cargando
     return <div className={styles.statusMessage} style={{ color: 'red' }}>{displayError}</div>;
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
        {confirmations.length === 0 && !isLoading ? ( // Asegurar que no se muestre si aún está cargando
          <p>Aún no hay confirmaciones.</p>
        ) : (
          <ul className={styles.confirmationList}>
            {confirmations.map((conf) => {
              const guestNames = conf.guests.map(g => g.nombre.trim()).filter(Boolean).join(', ');
              const displayName = `Form_${guestNames || 'Invitado(s) sin nombre'}`;
              const isDeleting = deleteStatus[conf.id] === 'deleting';
              const hasError = deleteStatus[conf.id] === 'error';

              return (
                <li key={conf.id} className={`${styles.confirmationItem} ${isDeleting ? styles.deleting : ''} ${hasError ? styles.deleteError : ''}`}>
                  <span className={styles.formName}>{displayName}</span>
                  <span className={styles.submitDate}>
                    (Enviado: {conf.submittedAt?.toDate().toLocaleString() ?? 'Fecha desconocida'})
                  </span>

                  {/* Botón simple de detalles (sin cambios) */}
                  <button
                     onClick={() => alert(`Detalles para ${conf.id}:\n${JSON.stringify(conf.guests, null, 2)}`)}
                     className={styles.detailsButton}
                     disabled={isDeleting} // Deshabilitar mientras se borra
                  >
                      Ver Detalles
                  </button>

                  {/* --- NUEVO BOTÓN DE BORRADO --- */}
                  <button
                    onClick={() => handleDelete(conf.id, displayName)}
                    className={styles.deleteButton}
                    disabled={isDeleting} // Deshabilitar si ya se está borrando
                  >
                    {isDeleting ? 'Borrando...' : 'Borrar'}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
       {/* Advertencia de seguridad (sin cambios) */}
       <p className={styles.securityWarning}> {/* ... */} </p>
    </div>
  );
};

export default AdminPage;