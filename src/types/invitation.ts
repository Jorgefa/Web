// src/types/invitation.ts (o añade a index.ts si prefieres)

// Interfaz para los datos de una invitación personalizada
export interface GuestInvitationData {
    id?: string; // ID del documento de Firestore (opcional, para uso interno)
    slug: string;
    displayName: string;
    customMessage: string;
    buttonText: string;
  }