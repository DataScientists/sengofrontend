import { type WrapProps as ChakraWrapProps } from '@chakra-ui/react';
import { Wrap as ChakraWrap } from '@chakra-ui/react';

type Props = ChakraWrapProps;
export type WrapProps = Props;

export const Wrap: React.FC<Props> = (props) => {
  return <ChakraWrap {...props} />;
};
