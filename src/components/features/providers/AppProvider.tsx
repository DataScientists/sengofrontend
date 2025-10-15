import React from 'react';
import { SearchBarProvider } from '../organisms/SearchBar';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <SearchBarProvider>
      {children}
    </SearchBarProvider>
  );
};

AppProvider.displayName = 'AppProvider';