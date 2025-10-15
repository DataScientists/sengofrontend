import type { BoxProps as ChakraBoxProps } from '@chakra-ui/react';
import { Box as ChakraBox } from '@chakra-ui/react';
import type { DraggableProvided } from '@hello-pangea/dnd';

// TODO: refactor code to accept any html element
type Props = ChakraBoxProps & {
  ref?: React.Ref<HTMLElement> | DraggableProvided['innerRef'];
};

export type BoxProps = Props;

export function Box({ ref, ...props }: Props) {
  return <ChakraBox ref={ref} {...props} />;
}
