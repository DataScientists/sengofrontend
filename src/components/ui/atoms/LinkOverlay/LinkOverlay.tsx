import { type LinkOverlayProps as ChakraLinkOverlayProps } from '@chakra-ui/react';
import { LinkOverlay as ChakraLinkOverlay } from '@chakra-ui/react';

type Props = ChakraLinkOverlayProps;
export type LinkOverlayProps = Props;

export const LinkOverlay: React.FC<Props> = (props) => {
  return <ChakraLinkOverlay {...props} />;
};
