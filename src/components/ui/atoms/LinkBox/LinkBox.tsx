import { type LinkBoxProps as ChakraLinkBoxProps } from '@chakra-ui/react';
import { LinkBox as ChakraLinkBox } from '@chakra-ui/react';

type Props = ChakraLinkBoxProps;
export type LinkBoxProps = Props;

export const LinkBox: React.FC<Props> = (props) => {
  return <ChakraLinkBox {...props} />;
};
