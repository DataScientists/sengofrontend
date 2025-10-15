import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

type UseToggleReturn = {
  isToggled: boolean;
  toggle: () => void;
};

export const useToggle = (initialValue: boolean, atomPrefix: string = ''): UseToggleReturn => {
  const toggleAtom = createToggleAtom(initialValue, atomPrefix);
  const [isToggled, setIsToggled] = useAtom(toggleAtom);

  const toggle = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, [setIsToggled]);

  return {
    isToggled,
    toggle,
  };
};

export function createToggleAtom(initialValue: boolean = true, name?: string) {
  const dynamicName = name
    ? `toggle_${name}_${Math.random().toString(36).slice(2, 6)}`
    : `toggle_${Math.random().toString(36).slice(2, 6)}`;

  const toggleAtom = atom(initialValue);

  // Add debug label in development
  if (process.env.NODE_ENV === 'development') {
    Object.defineProperty(toggleAtom, 'debugLabel', {
      value: dynamicName,
      enumerable: true,
    });
  }

  return toggleAtom;
}
