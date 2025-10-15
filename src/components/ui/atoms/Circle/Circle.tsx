import { type CircleProps as ChakraCircleProps } from '@chakra-ui/react';
import { Circle as ChakraCircle } from '@chakra-ui/react';

type Props = ChakraCircleProps;
export type CircleProps = Props;

export const Circle: React.FC<Props> = (props) => {
  return <ChakraCircle {...props} />;
};
