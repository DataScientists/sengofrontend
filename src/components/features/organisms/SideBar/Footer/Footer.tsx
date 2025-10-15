import { Icon } from '@chakra-ui/react';
import { Box, Group, Link, LogoutIcon, Text } from '@components/ui/atoms';
import { useAuthContext } from '@shared/auth';
import { useCallback } from 'react';

type Props = {
  isExpanded?: boolean;
};

export const Footer: React.FC<Props> = ({ isExpanded }) => {
  const { logout } = useAuthContext();

  const handleLogOut = useCallback(() => {
    void logout();
  }, [logout]);

  return (
    <Box
      display="flex"
      alignItems="center"
      bottom="0"
      w="full"
      css={{ height: '60px' }}
      pl="5"
      gap="21px"
      borderColor="title.dark/20"
    >
      <Group onClick={handleLogOut} cursor="pointer" gap="8px" alignItems="center">
        <Icon css={{ height: '16px', width: '16px', flexShrink: '0' }}>
          <LogoutIcon />
        </Icon>
        {isExpanded && (
          <Link textStyle="bodyThree" color="body.dark">
            <Text fontSize="14px" fontWeight="500" color="body.dark">
              Logout
            </Text>
          </Link>
        )}
      </Group>
    </Box>
  );
};
