import { type FlexProps as ChakraFlexProps } from '@chakra-ui/react';
import { Flex as ChakraFlex } from '@chakra-ui/react';

type Props = ChakraFlexProps;
export type FlexProps = Props;

export const Flex: React.FC<Props> = (props) => {
  return <ChakraFlex {...props} />;
};
