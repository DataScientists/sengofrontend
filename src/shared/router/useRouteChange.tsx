import { useEffect, useRef } from 'react';
import type { Location as RouterLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const compareLocations = (a: RouterLocation, b: RouterLocation) => {
  return a.pathname === b.pathname && a.search === b.search;
};

export const useRouteChange = (onChange: (location: RouterLocation) => void) => {
  const location = useLocation();
  const prevLocation = useRef(location);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      return;
    }

    if (compareLocations(prevLocation.current, location)) {
      return;
    }

    onChange(location);
    prevLocation.current = location;
  }, [location, onChange]);

  return {
    register: () => {
      if (!isInitialMount.current) {
        onChange(location);
      }
    },
  };
};
