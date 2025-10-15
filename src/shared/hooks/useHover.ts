import useHoverReactHook from '@react-hook/hover';
import { useRef } from 'react';

export const useHover = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const isHovering = useHoverReactHook(ref as React.RefObject<HTMLElement>);

  return {
    ref,
    isHovering,
  };
};
