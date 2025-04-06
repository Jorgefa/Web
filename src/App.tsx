// src/App.tsx (Añadir las nuevas rutas)
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomePage from './pages/HomePage';
import MobileOnlyWrapper from './components/MobileOnlyWrapper/MobileOnlyWrapper';
import ConfirmationPage from './pages/ConfirmationPage'; // <-- Nueva importación
import ThankYouPage from './pages/ThankYouPage';     // <-- Nueva importación
// Importa MarianoPage si la tienes
// import MarianoPage from './pages/MarianoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MobileOnlyWrapper>
        <HomePage />
      </MobileOnlyWrapper>
    ),
  },
  { // --- Nueva Ruta ---
    path: '/confirmacion',
    element: <ConfirmationPage />, // No necesita MobileOnlyWrapper (o sí, si quieres)
  },
  { // --- Nueva Ruta ---
    path: '/gracias',
    element: <ThankYouPage />,
  },
  // Añade la ruta de Mariano si la usas
  // {
  //   path: '/mariano',
  //   element: <MarianoPage />,
  // }
]);

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
};

export default App;