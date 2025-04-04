// src/App.tsx (Modificado)
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomePage from './pages/HomePage';
import MobileOnlyWrapper from './components/MobileOnlyWrapper/MobileOnlyWrapper.tsx'; // Importa el Wrapper
// ... otras importaciones de páginas

const router = createBrowserRouter([
  {
    path: '/',
    // Envuelve HomePage con MobileOnlyWrapper
    element: (
      <MobileOnlyWrapper>
        <HomePage />
      </MobileOnlyWrapper>
    ),
  },
  // ... otras rutas (ellas no necesitan el wrapper si no quieres aplicarles la restricción)
  // {
  //   path: '/confirmacion',
  //   element: <ConfirmationPage />, // El formulario podría ser accesible en escritorio
  // },
]);

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
};

export default App;