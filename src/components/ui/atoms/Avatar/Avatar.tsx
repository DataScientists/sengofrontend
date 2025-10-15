import { Avatar as ChakraAvatar } from '@chakra-ui/react';

type Props = ChakraAvatar.RootProps;
export type AvatarProps = Props;

export const Avatar: React.FC<Props> = (props) => {
  return <ChakraAvatar.Root {...props} />;
};
