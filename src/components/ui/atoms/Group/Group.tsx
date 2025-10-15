import { type GroupProps as ChakraGroupProps } from '@chakra-ui/react';
import { Group as ChakraGroup } from '@chakra-ui/react';

type Props = ChakraGroupProps;
export type GroupProps = Props;

export const Group: React.FC<Props> = (props) => {
  return <ChakraGroup {...props} />;
};
