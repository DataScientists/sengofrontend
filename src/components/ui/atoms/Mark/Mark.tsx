import { type MarkProps as ChakraMarkProps } from '@chakra-ui/react';
import { Mark as ChakraMark } from '@chakra-ui/react';

type Props = ChakraMarkProps;
export type MarkProps = Props;

export const Mark: React.FC<Props> = (props) => {
  return <ChakraMark {...props} />;
};
