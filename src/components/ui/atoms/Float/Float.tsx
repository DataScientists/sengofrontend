import { type FloatProps as ChakraFloatProps } from '@chakra-ui/react';
import { Float as ChakraFloat } from '@chakra-ui/react';

type Props = ChakraFloatProps;
export type FloatProps = Props;

export const Float: React.FC<Props> = (props) => {
  return <ChakraFloat {...props} />;
};
