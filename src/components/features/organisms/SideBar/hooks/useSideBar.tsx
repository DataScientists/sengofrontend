import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

const sideBarStateAtom = atom<boolean>(true);

type UseSideBarReturn = {
  isExpanded: boolean;
  toggleSideBar: () => void;
};

export const useSideBar = (): UseSideBarReturn => {
  const [isExpanded, setIsExpanded] = useAtom(sideBarStateAtom);

  const toggleSideBar = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, [setIsExpanded]);

  return {
    isExpanded,
    toggleSideBar,
  };
};
