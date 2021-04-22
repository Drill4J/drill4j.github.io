import { useEffect, useState } from 'react';

export const windowSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<keyof typeof windowSizes>('xl');
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setWindowSize('md');
      } else {
        setWindowSize('xl');
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
