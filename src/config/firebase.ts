import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase leída desde las variables de entorno de Vite
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Validar que las variables de entorno estén cargadas (opcional pero recomendado)
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error(
    'Error: Firebase environment variables are not configured correctly.'
  );
  // Podrías lanzar un error o mostrar un mensaje al usuario aquí
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener una instancia de Firestore y exportarla para usarla en otros lugares
export const db = getFirestore(app);

// También puedes exportar 'app' si necesitas otras funcionalidades de Firebase (Auth, Storage, etc.)
// export { app };

console.log('Firebase Initialized. Project ID:', firebaseConfig.projectId); // Mensaje para confirmar en consola