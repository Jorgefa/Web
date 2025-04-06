// src/components/ScrollToTop/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Extrae el 'pathname' (ej: '/', '/confirmacion') de la ubicación actual
  const { pathname } = useLocation();

  // Usa useEffect para ejecutar una acción cada vez que 'pathname' cambie
  useEffect(() => {
    // Haz scroll al principio de la página (coordenadas 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // El efecto se dispara solo si 'pathname' es diferente al anterior

  // Este componente no renderiza nada visualmente
  return null;
}

export default ScrollToTop;