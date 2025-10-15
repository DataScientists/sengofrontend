import dummyAvatar from '@assets/dumy-avatars/1.png';
import { Box, Flex, Text } from '@components/ui/atoms';
import { Avatar } from '@components/ui/molecules';
import { useAuthContext } from '@shared/auth';

type Props = {
  isExpanded?: boolean;
};

export const OnlineUser: React.FC<Props> = ({ isExpanded }) => {
  const { user } = useAuthContext();

  return (
    <Flex display="flex" flexDirection="column" alignItems="center" gap="8px">
      <Box display="flex" alignItems="center" gap="10px">
        <Avatar
          src={user?.avatar ?? dummyAvatar}
          css={{
            width: isExpanded ? '64px' : '24px',
            height: isExpanded ? '64px' : '24px',
            transition: 'all 0.2s ease',
          }}
          cursor="pointer"
        />
      </Box>
      {isExpanded && (
        <>
          <Box display="flex" flexDirection="column" alignItems="center" gap="4px">
            <Text fontWeight="700" fontSize="13px" color="title.dark">
              {user?.name ?? 'Guest User'}
            </Text>
            <Text fontSize="12px" fontWeight="400" color="body.dark">
              {user?.address ?? 'Thimphu, Bhutan'}
            </Text>
          </Box>
          <Box
            display="flex"
            padding="4px 16px"
            alignItems="center"
            gap="10px"
            bg="brand"
            borderRadius="100px"
          >
            <Text fontSize="11px" fontWeight="600" textTransform="uppercase">
              {user?.role ?? 'Admin'}
            </Text>
          </Box>
        </>
      )}
    </Flex>
  );
};
