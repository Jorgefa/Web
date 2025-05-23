// src/App.tsx (Añadir las nuevas rutas)
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Outlet puede que no se necesite aquí directamente
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ConfirmationPage from './pages/ConfirmationPage'; // <-- Nueva importación
import ThankYouPage from './pages/ThankYouPage';     // <-- Nueva importación
import AdminPage from './pages/AdminPage';
import GuestPage from './pages/GuestPage';
import RandomVideoPage from './pages/RandomVideoPage';
import { TranslationProvider } from './context/TranslationContext';


// Importa MarianoPage si la tienes
// import MarianoPage from './pages/MarianoPage';

// --- Definición de rutas usando el Layout ---
const router = createBrowserRouter([
  {
    // Ruta padre que usa el MainLayout
    element: <MainLayout />,
    // Rutas hijas que se renderizarán dentro del <Outlet> de MainLayout
    children: [
      {
        path: '/',
        element: (
            <HomePage />
        ),
      },
      { // --- NUEVA RUTA DINÁMICA ---
        path: '/invitado/:guestSlug', // El : indica un parámetro dinámico
        element: <GuestPage />,
      },
      {
        path: '/confirmacion',
        element: <ConfirmationPage />,
      },
      {
        path: '/gracias',
        element: <ThankYouPage />,
      },
      {
        path: '/adminNovios',
        element: <AdminPage />,
      },
      { // --- NUEVA RUTA ---
        path: '/ramdon', // O la ruta que prefieras
        element: <RandomVideoPage />,
      },
      // ... otras rutas hijas ...
    ],
  },
  // Puedes tener otras rutas fuera del MainLayout si fuera necesario
]);

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <RouterProvider router={router} />
    </TranslationProvider>
  );
};

export default App;