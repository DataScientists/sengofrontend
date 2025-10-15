import { type FieldHelperTextProps as ChakraFieldHelperTextProps } from '@chakra-ui/react';
import { FieldHelperText as ChakraFieldHelperText } from '@chakra-ui/react';

type Props = ChakraFieldHelperTextProps;
export type FieldHelperTextProps = Props;

export const FieldHelperText: React.FC<Props> = (props) => {
  return <ChakraFieldHelperText {...props} />;
};
