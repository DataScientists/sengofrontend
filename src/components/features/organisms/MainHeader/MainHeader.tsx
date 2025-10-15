import { BellIcon, Icon, ShopIcon, Stack, Text } from '@components/ui/atoms';
import { Flex } from '@components/ui/atoms/Flex';
import { useMemo } from 'react';

export const MainHeader: React.FC = () => {
  const today = useMemo(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };

    return date.toLocaleDateString('en-US', options);
  }, []);

  return (
    <Flex
      display="flex"
      w="full"
      padding="16px 24px"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="8px"
      background="body.50"
      boxShadow="0 0 10px 0 rgba(236, 238, 241, 0.70);"
    >
      <Text width="182px" fontWeight="500" fontSize="14px" color="title.dark" lineHeight="150%">
        {today}
      </Text>
      <Stack
        display="flex"
        width="182px"
        justifyContent="flex-end"
        alignItems="center"
        direction="row"
        gap="24px"
        flexShrink="0"
      >
        <Icon css={{ width: ' 24px', height: '24px', flexShrink: '0' }}>
          <ShopIcon />
        </Icon>
        <Icon css={{ width: ' 24px', height: '24px', flexShrink: '0' }}>
          <BellIcon />
        </Icon>
      </Stack>
    </Flex>
  );
};
