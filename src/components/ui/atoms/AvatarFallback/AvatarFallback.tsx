import { type AvatarFallbackProps as ChakraAvatarFallbackProps } from '@chakra-ui/react';
import { AvatarFallback as ChakraAvatarFallback } from '@chakra-ui/react';

type Props = ChakraAvatarFallbackProps;
export type AvatarFallbackProps = Props;

export const AvatarFallback: React.FC<Props> = (props) => {
  return <ChakraAvatarFallback {...props} />;
};
