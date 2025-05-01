// src/types/confirmation.ts
import { Timestamp } from 'firebase/firestore'; // --- 1. Importa Timestamp ---

export type GuestType = 'adulto' | 'niño' | '';
export type PlatoType = 'carne' | 'pescado' | '';
export type TransporteType = 'no_necesito' | 'si_pronto' | 'si_cierre' | '';

export interface GuestData {
  nombre: string;
  apellidos: string;
  tipo: GuestType;
  plato?: PlatoType;
  transporte?: TransporteType;
  intolerancias?: string;
  comentarios?: string;
}

// --- 2. Añade el campo submittedAt ---
export interface ConfirmationFormData {
  guests: GuestData[];
  submittedAt: Timestamp;
  originatingSlug?: string;
}