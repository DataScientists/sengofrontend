import { Provider as JotaiProvider } from 'jotai';

export const JotaiRoot = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider>{children}</JotaiProvider>;
};
