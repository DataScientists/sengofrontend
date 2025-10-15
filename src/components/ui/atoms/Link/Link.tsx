import { type LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';

type Props = ChakraLinkProps;
export type LinkProps = Props;

export const Link: React.FC<Props> = (props) => {
  return <ChakraLink {...props} />;
};
