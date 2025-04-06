// src/types/index.ts
import { Timestamp } from 'firebase/firestore'; // Importa el tipo Timestamp

// Define la estructura de los datos que el formulario recogerá
export interface ConfirmationFormData {
  nombre: string;
  apellidos: string;
  asistencia: string;
  acompanantes: string;
  platoPrincipal: string;
  busIda: string;
  busVuelta: string;
  comentariosComida?: string; // Comentarios son opcionales
  comentariosOtros?: string; // Comentarios son opcionales
}

// Opcional: Define la estructura como se guardará en Firestore (incluyendo timestamp)
export interface ConfirmationDocument extends ConfirmationFormData {
  timestamp: Timestamp; // Usaremos el Timestamp de Firestore
}