// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { ParallaxProvider } from 'react-scroll-parallax'; // Mover ParallaxProvider aquí

const MainLayout: React.FC = () => {
  return (
    // Puedes poner aquí elementos comunes a todas las páginas si quieres (header, footer...)
    // Mover ParallaxProvider aquí para asegurar que envuelve todo lo enrutado
     <ParallaxProvider>
        {/* ScrollToTop ahora está DENTRO del flujo del router */}
        <ScrollToTop />
        {/* Outlet renderizará el componente de la ruta actual (HomePage, ConfirmationPage, etc.) */}
        <main> {/* Opcional: envolver en <main> por semántica */}
          <Outlet />
        </main>
    </ParallaxProvider>
  );
};

export default MainLayout;