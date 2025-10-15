import { type HighlightProps as ChakraHighlightProps } from '@chakra-ui/react';
import { Highlight as ChakraHighlight } from '@chakra-ui/react';

type Props = ChakraHighlightProps;
export type HighlightProps = Props;

export const Highlight: React.FC<Props> = (props) => {
  return <ChakraHighlight {...props} />;
};
