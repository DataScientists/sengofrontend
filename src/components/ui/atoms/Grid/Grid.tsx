import { type GridProps as ChakraGridProps } from '@chakra-ui/react';
import { Grid as ChakraGrid } from '@chakra-ui/react';

type Props = ChakraGridProps;
export type GridProps = Props;

export const Grid: React.FC<Props> = (props) => {
  return <ChakraGrid {...props} />;
};
