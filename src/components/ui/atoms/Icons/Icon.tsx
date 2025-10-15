import { type IconProps as ChakraIconProps } from '@chakra-ui/react';
import { Icon as ChakraIcon } from '@chakra-ui/react';

type Props = ChakraIconProps;
export type IconProps = Props;

export const Icon: React.FC<Props> = (props) => {
  return <ChakraIcon {...props} />;
};
