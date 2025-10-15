import { type FieldsetContentProps as ChakraFieldsetContentProps } from '@chakra-ui/react';
import { FieldsetContent as ChakraFieldsetContent } from '@chakra-ui/react';

type Props = ChakraFieldsetContentProps;
export type FieldsetContentProps = Props;

export const FieldsetContent: React.FC<Props> = (props) => {
  return <ChakraFieldsetContent {...props} />;
};
