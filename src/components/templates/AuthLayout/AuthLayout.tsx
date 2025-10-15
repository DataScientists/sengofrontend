import bgImage from '@assets/auth-bg.png';
import { Box } from '@components/ui/atoms';
import { Flex } from '@components/ui/atoms/Flex';
import { BrandFooter } from '@components/ui/molecules';

export const AuthLayout: React.FCWithChildren = (props) => {
  return (
    <Flex
      flex="1"
      w="full"
      h="full"
      as="main"
      position="relative"
      overflow="hidden"
      css={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          /* now you can pass any CSS value */
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          zIndex: 0,
        },
      }}
    >
      <Flex
        display="flex"
        flex="1"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="1"
        color="title.dark"
      >
        <BrandFooter />
      </Flex>
      <Flex
        display="flex"
        bg="body.50"
        flex="1"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="1"
      >
        <Box width="full" height="full" padding="72px 252px 72px 112px">
          {props.children}
        </Box>
      </Flex>
    </Flex>
  );
};
