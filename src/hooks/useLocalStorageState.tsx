import { useEffect, useState } from 'react';

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [state, setState] = useState(() => {
    let stored: string | null;

    try {
      stored = localStorage.getItem(key);
    } catch {
      return initialValue;
    }

    if (!stored) {
      return initialValue;
    }

    return JSON.parse(stored);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
