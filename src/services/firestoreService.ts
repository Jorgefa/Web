// src/services/firestoreService.ts
import { collection, addDoc, Timestamp } from 'firebase/firestore'; // Timestamp puede ser necesario si haces más cosas con fechas
import { db } from '../config/firebase';
// --- Asegúrate de importar el tipo actualizado ---
import { ConfirmationFormData } from '../types/confirmation';

const CONFIRMATIONS_COLLECTION = 'confirmations';

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