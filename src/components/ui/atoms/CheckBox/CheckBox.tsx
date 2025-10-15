import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

type Props = ChakraCheckbox.RootProps;
export type CheckboxProps = Props;

export const Checkbox: React.FC<Props> = (props) => {
  return <ChakraCheckbox.Root {...props} />;
};
