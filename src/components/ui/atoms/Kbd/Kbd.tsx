import { type KbdProps as ChakraKbdProps } from '@chakra-ui/react';
import { Kbd as ChakraKbd } from '@chakra-ui/react';

type Props = ChakraKbdProps;
export type KbdProps = Props;

export const Kbd: React.FC<Props> = (props) => {
  return <ChakraKbd {...props} />;
};
