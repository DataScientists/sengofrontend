import { type AvatarImageProps as ChakraAvatarImageProps } from '@chakra-ui/react';
import { AvatarImage as ChakraAvatarImage } from '@chakra-ui/react';

type Props = ChakraAvatarImageProps;
export type AvatarImageProps = Props;

export const AvatarImage: React.FC<Props> = (props) => {
  return <ChakraAvatarImage {...props} />;
};
