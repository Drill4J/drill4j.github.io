import { useEffect, useState } from 'react';

export const useSessionStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(() => {
    try {
      const sessionStorageValue = sessionStorage.getItem(key);
      if (typeof sessionStorageValue !== 'string') {
        sessionStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
      return JSON.parse(sessionStorageValue || 'null');
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem(key, serializedState);
    } catch (e) {
      console.log(e);
    }
  });

  return [state, setState];
};
