import { Flex } from '@components/ui/atoms/Flex';
import type { ReactNode } from 'react';

interface AuthCardProps {
  children: ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
  return (
    <Flex
      width="480px"
      flexDirection="column"
      alignItems="stretch"
      justifyContent="center"
      gap="48px"
      bg="inherit"
      borderRadius="20px"
    >
      {children}
    </Flex>
  );
};
