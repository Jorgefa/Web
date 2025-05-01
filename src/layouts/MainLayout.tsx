// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { ParallaxProvider } from 'react-scroll-parallax'; // Mover ParallaxProvider aquí
import MobileOnlyWrapper from '../components/MobileOnlyWrapper/MobileOnlyWrapper';

const MainLayout: React.FC = () => {
  return (
    <ParallaxProvider>
      {/* ScrollToTop sigue aquí para manejar el scroll en CADA navegación */}
      <ScrollToTop />
      {/* --- 2. Envuelve el Outlet con el Wrapper --- */}
      <MobileOnlyWrapper>
        {/* Ahora, cualquier página renderizada por Outlet pasará por el chequeo */}
        <main> {/* Opcional: mantener <main> */}
          <Outlet />
        </main>
      </MobileOnlyWrapper>
    </ParallaxProvider>
  );
};

export default MainLayout;