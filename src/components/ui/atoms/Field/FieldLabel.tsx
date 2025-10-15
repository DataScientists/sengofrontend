import { type FieldLabelProps as ChakraFieldLabelProps } from '@chakra-ui/react';
import { FieldLabel as ChakraFieldLabel } from '@chakra-ui/react';

type Props = ChakraFieldLabelProps;
export type FieldLabelProps = Props;

export const FieldLabel: React.FC<Props> = (props) => {
  return <ChakraFieldLabel {...props} />;
};
