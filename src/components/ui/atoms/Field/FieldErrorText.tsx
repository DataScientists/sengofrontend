import { type FieldErrorTextProps as ChakraFieldErrorTextProps } from '@chakra-ui/react';
import { FieldErrorText as ChakraFieldErrorText } from '@chakra-ui/react';

type Props = ChakraFieldErrorTextProps;
export type FieldErrorTextProps = Props;

export const FieldErrorText: React.FC<Props> = (props) => {
  return <ChakraFieldErrorText {...props} />;
};
