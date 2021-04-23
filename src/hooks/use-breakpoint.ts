import { useEffect, useState } from 'react';

export const windowSizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useBreakpoint = (size: keyof typeof windowSizes) => {
  const [isWindowLessSize, setIsWindowLessSize] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < windowSizes[size]) {
        setIsWindowLessSize(true);
      } else {
        setIsWindowLessSize(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isWindowLessSize;
};
