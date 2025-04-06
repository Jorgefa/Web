// src/App.tsx (Añadir las nuevas rutas)
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomePage from './pages/HomePage';
import MobileOnlyWrapper from './components/MobileOnlyWrapper/MobileOnlyWrapper';
import ConfirmationPage from './pages/ConfirmationPage'; // <-- Nueva importación
import ThankYouPage from './pages/ThankYouPage';     // <-- Nueva importación
import AdminPage from './pages/AdminPage';
// Importa MarianoPage si la tienes
// import MarianoPage from './pages/MarianoPage';

const router = createBrowserRouter([
  // ... (ruta '/', '/confirmacion', '/gracias') ...
  {
    path: '/',
    element: ( <MobileOnlyWrapper> <HomePage /> </MobileOnlyWrapper> ),
  },
  {
    path: '/confirmacion',
    element: <ConfirmationPage />,
  },
  {
    path: '/gracias',
    element: <ThankYouPage />,
  },
  { // --- Nueva Ruta Admin ---
    path: '/adminNovios', // Cambia si quieres una URL más 'secreta'
    element: <AdminPage />,
  },
  // ... (otras rutas como /mariano) ...
]);

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
};

export default App;