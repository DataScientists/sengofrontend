import { type BleedProps as ChakraBleedProps } from '@chakra-ui/react';
import { Bleed as ChakraBleed } from '@chakra-ui/react';

type Props = ChakraBleedProps;
export type BleedProps = Props;

export const Bleed: React.FC<Props> = (props) => {
  return <ChakraBleed {...props} />;
};
