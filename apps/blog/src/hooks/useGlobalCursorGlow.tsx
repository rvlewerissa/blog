import { useEffect } from 'react';

export default function useGlobalCursorGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--global-mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--global-mouse-y', `${y}%`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}