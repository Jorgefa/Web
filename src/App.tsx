// src/App.tsx (Añadir las nuevas rutas)
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; // Outlet puede que no se necesite aquí directamente
import MainLayout from './layouts/MainLayout';

import HomePage from './pages/HomePage';
import MobileOnlyWrapper from './components/MobileOnlyWrapper/MobileOnlyWrapper';
import ConfirmationPage from './pages/ConfirmationPage'; // <-- Nueva importación
import ThankYouPage from './pages/ThankYouPage';     // <-- Nueva importación
import AdminPage from './pages/AdminPage';
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
          <MobileOnlyWrapper> {/* MobileOnlyWrapper envuelve solo HomePage */}
            <HomePage />
          </MobileOnlyWrapper>
        ),
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
      // ... otras rutas hijas ...
    ],
  },
  // Puedes tener otras rutas fuera del MainLayout si fuera necesario
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;