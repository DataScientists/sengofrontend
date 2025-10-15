import { type SimpleGridProps as ChakraSimpleGridProps } from '@chakra-ui/react';
import { SimpleGrid as ChakraSimpleGrid } from '@chakra-ui/react';

type Props = ChakraSimpleGridProps;
export type SimpleGridProps = Props;

export const SimpleGrid: React.FC<Props> = (props) => {
  return <ChakraSimpleGrid {...props} />;
};
