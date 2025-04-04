// src/components/MobileOnlyWrapper/MobileOnlyWrapper.tsx
import React, { useState, useEffect } from 'react';
import DesktopWarningPage from '../../pages/DesktopWarningPage'; // Importa la página de advertencia

const MOBILE_BREAKPOINT = 768;

interface MobileOnlyWrapperProps {
  children: React.ReactNode; // Acepta cualquier elemento React como hijo
}

const MobileOnlyWrapper: React.FC<MobileOnlyWrapperProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
    // Añadimos typeof window !== 'undefined' para seguridad en entornos SSR/prerendering si los hubiera
  );

  useEffect(() => {
     // Asegúrate de que window está definido antes de añadir el listener
     if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Si no estamos en el navegador (SSR inicial quizás), o si es escritorio, muestra advertencia
  if (typeof window === 'undefined' || !isMobile) {
      return <DesktopWarningPage />;
  }

  // Si es móvil, renderiza el contenido pasado como children
  return <>{children}</>;
};

export default MobileOnlyWrapper;