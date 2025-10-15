import { type SpanProps as ChakraSpanProps } from '@chakra-ui/react';
import { Span as ChakraSpan } from '@chakra-ui/react';

type Props = ChakraSpanProps;
export type SpanProps = Props;

export const Span: React.FC<Props> = (props) => {
  return <ChakraSpan {...props} />;
};
