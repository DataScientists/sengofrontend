import { type FieldsetErrorTextProps as ChakraFieldsetErrorTextProps } from '@chakra-ui/react';
import { FieldsetErrorText as ChakraFieldsetErrorText } from '@chakra-ui/react';

type Props = ChakraFieldsetErrorTextProps;
export type FieldsetErrorTextProps = Props;

export const FieldsetErrorText: React.FC<Props> = (props) => {
  return <ChakraFieldsetErrorText {...props} />;
};
