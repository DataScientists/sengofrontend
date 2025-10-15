import { type FieldsetHelperTextProps as ChakraFieldsetHelperTextProps } from '@chakra-ui/react';
import { FieldsetHelperText as ChakraFieldsetHelperText } from '@chakra-ui/react';

type Props = ChakraFieldsetHelperTextProps;
export type FieldsetHelperTextProps = Props;

export const FieldsetHelperText: React.FC<Props> = (props) => {
  return <ChakraFieldsetHelperText {...props} />;
};
