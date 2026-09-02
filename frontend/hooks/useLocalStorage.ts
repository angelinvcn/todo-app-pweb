'use client';

import {
  useCallback,
  useSyncExternalStore,
} from 'react';

function getSnapshot(key: string, initialValue: unknown) {
  if (typeof window === 'undefined') {
    return JSON.stringify(initialValue);
  }

  const storedValue = localStorage.getItem(key);

  return storedValue ?? JSON.stringify(initialValue);
}

function getServerSnapshot(initialValue: unknown) {
  return JSON.stringify(initialValue);
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const subscribe = useCallback(
    (callback: () => void) => {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === key) {
          callback();
        }
      };

      window.addEventListener(
        'storage',
        handleStorageChange
      );

      return () => {
        window.removeEventListener(
          'storage',
          handleStorageChange
        );
      };
    },
    [key]
  );

  const snapshot = useSyncExternalStore(
    subscribe,
    () => getSnapshot(key, initialValue),
    () => getServerSnapshot(initialValue)
  );

  const setValue = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));

      window.dispatchEvent(
        new StorageEvent('storage', {
          key,
        })
      );
    },
    [key]
  );

  return [JSON.parse(snapshot), setValue];
}