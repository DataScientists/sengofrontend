import { Icon } from '@chakra-ui/react';
import { Box } from '@components/ui/atoms/Box';
import { Group } from '@components/ui/atoms/Group';
import { Link } from '@components/ui/atoms/Link';
import { Text } from '@components/ui/atoms/Text';
import { useAuthContext } from '@shared/auth';
import { Logout } from 'iconsax-reactjs';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

type Props = {
  isExpanded?: boolean;
};

export const Footer: React.FC<Props> = ({ isExpanded }) => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOut = useCallback(() => {
    void logout();
    void navigate('/');
  }, [logout]);

  return (
    <Box
      display="flex"
      alignItems="center"
      bottom="0"
      w="full"
      css={{ height: '40px' }}
      px="4"
      borderRadius="8px"
      cursor="pointer"
    >
      <Group
        w="full"
        onClick={handleLogOut}
        cursor="pointer"
        gap="8px"
        alignItems="center"
        p="2px 4px"
        borderRadius="8px"
        _hover={{ bg: 'brand.50' }}
      >
        <Icon css={{ height: '16px', width: '16px', flexShrink: '0' }}>
          <Logout size="20" color="#6E6789" variant="Linear" />
        </Icon>
        {isExpanded && (
          <Link textStyle="bodyThree" color="body.dark">
            <Text
              fontSize="14px"
              fontWeight="500"
              color="body.dark"
              _hover={{ color: 'title.dark', fontWeight: '600' }}
            >
              Logout
            </Text>
          </Link>
        )}
      </Group>
    </Box>
  );
};
