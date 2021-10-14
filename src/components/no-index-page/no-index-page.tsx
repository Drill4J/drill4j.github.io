import React, { useEffect } from 'react';

export const NoIndex = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'robots');
    meta.setAttribute('content', 'noindex');

    document.head.prepend(meta);
    return () => {
      document.head.removeChild(meta);
    };
  });

  return null;
};
