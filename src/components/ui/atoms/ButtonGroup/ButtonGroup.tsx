import { type ButtonGroupProps as ChakraButtonGroupProps } from '@chakra-ui/react';
import { ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react';

type Props = ChakraButtonGroupProps & {
  ref?: React.MutableRefObject<any>;
};
export type ButtonGroupProps = Props;

export const ButtonGroup: React.FC<Props> = (props) => {
  return <ChakraButtonGroup {...props} ref={props.ref} />;
};
