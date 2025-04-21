// src/services/firestoreService.ts
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc, where, limit } from 'firebase/firestore'; // Timestamp puede ser necesario si haces más cosas con fechas
import { db } from '../config/firebase';
import { ConfirmationFormData } from '../types/confirmation';
import { GuestInvitationData } from '../types/invitation'; // <-- Nueva importación

const CONFIRMATIONS_COLLECTION = 'confirmations';
const INVITATIONS_COLLECTION = 'invitations'; // <-- Nombre de la nueva colección

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

/**
 * Elimina un documento de confirmación de Firestore por su ID.
 * @param docId El ID del documento a eliminar.
 * @returns Promise<void>
 * @throws Error si falla la eliminación en Firestore.
 */
export const deleteConfirmation = async (docId: string): Promise<void> => {
  if (!docId) {
      console.error('Error: Se intentó borrar sin ID de documento.');
      throw new Error('ID de documento no válido.');
  }
  try {
    // Crea una referencia al documento específico usando su ID
    const confirmationDocRef = doc(db, CONFIRMATIONS_COLLECTION, docId);
    // Llama a deleteDoc para eliminarlo
    await deleteDoc(confirmationDocRef);
    console.log(`Documento con ID ${docId} eliminado con éxito.`);
  } catch (error) {
    console.error(`Error eliminando documento ${docId} de Firestore: `, error);
    throw new Error('No se pudo eliminar la confirmación de la base de datos.');
  }
};

// --- NUEVA FUNCIÓN ---
/**
 * Obtiene los datos de una invitación personalizada buscando por su slug.
 * @param slug El identificador único de la URL del invitado.
 * @returns Promise<GuestInvitationData | null> Los datos de la invitación o null si no se encuentra.
 * @throws Error si falla la lectura en Firestore.
 */
export const getGuestInvitationBySlug = async (slug: string): Promise<GuestInvitationData | null> => {
  if (!slug) {
    console.warn('Intento de búsqueda de invitación sin slug.');
    return null;
  }
  try {
    const invitationsCollectionRef = collection(db, INVITATIONS_COLLECTION);
    // Crea una consulta para buscar el documento donde el campo 'slug' coincida
    const q = query(
        invitationsCollectionRef,
        where('slug', '==', slug.toLowerCase()), // Busca por slug (en minúsculas por seguridad)
        limit(1) // Solo esperamos encontrar uno
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn(`No se encontró invitación con el slug: ${slug}`);
      return null; // No encontrado
    }

    // Debería haber solo un documento debido a limit(1) y slug único
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data() as Omit<GuestInvitationData, 'id'>; // Asumimos que los datos coinciden

    return {
      id: docSnap.id, // Añadimos el ID del documento por si acaso
      ...data,
    };

  } catch (error) {
    console.error(`Error obteniendo invitación por slug "${slug}": `, error);
    throw new Error('No se pudieron obtener los datos de la invitación.');
  }
};