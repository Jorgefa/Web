// src/services/firestoreService.ts
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore'; // Timestamp puede ser necesario si haces más cosas con fechas
import { db } from '../config/firebase';
import { ConfirmationFormData } from '../types/confirmation';

const CONFIRMATIONS_COLLECTION = 'confirmations';

// Interfaz extendida para incluir ID, usada internamente por getAllConfirmations
interface ConfirmationDocService extends ConfirmationFormData {
  id: string;
}

/**
 * Guarda los datos del formulario de confirmación (incluyendo timestamp) en Firestore.
 * @param formData Los datos validados del formulario MÁS el timestamp añadido.
 * @returns Promise<void>
 * @throws Error si falla la escritura en Firestore.
 */
 // --- La firma ahora espera el tipo completo ---
export const saveConfirmation = async (formData: ConfirmationFormData): Promise<void> => {
  try {
    const confirmationsCollectionRef = collection(db, CONFIRMATIONS_COLLECTION);
    // Simplemente guarda el objeto completo que recibe
    await addDoc(confirmationsCollectionRef, formData);
    console.log('Confirmación guardada con éxito en Firestore (con timestamp)');
  } catch (error) {
    console.error('Error escribiendo documento en Firestore: ', error);
    throw new Error('No se pudo guardar la confirmación en la base de datos.');
  }
};

// --- NUEVA FUNCIÓN ---
/**
 * Obtiene todas las confirmaciones de Firestore, ordenadas por fecha de envío.
 * @returns Promise<ConfirmationDocService[]> Un array de documentos, cada uno con su ID.
 * @throws Error si falla la lectura en Firestore.
 */
export const getAllConfirmations = async (): Promise<ConfirmationDocService[]> => {
  try {
    const confirmationsCollectionRef = collection(db, CONFIRMATIONS_COLLECTION);
    // Creamos una consulta para ordenar por 'submittedAt' descendente (más nuevas primero)
    const q = query(confirmationsCollectionRef, orderBy('submittedAt', 'desc'));

    const querySnapshot = await getDocs(q); // Ejecutamos la consulta

    const confirmations: ConfirmationDocService[] = [];
    querySnapshot.forEach((doc) => {
      // Importante: Obtenemos los datos Y el ID del documento
      confirmations.push({
        id: doc.id,
        ...(doc.data() as ConfirmationFormData), // Hacemos type assertion aquí
      });
    });

    console.log(`Se obtuvieron ${confirmations.length} confirmaciones.`);
    return confirmations;

  } catch (error) {
    console.error('Error obteniendo documentos de Firestore: ', error);
    throw new Error('No se pudieron obtener las confirmaciones de la base de datos.');
  }
};
