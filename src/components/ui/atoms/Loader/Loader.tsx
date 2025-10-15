import { type LoaderProps as ChakraLoaderProps } from '@chakra-ui/react';
import { Loader as ChakraLoader } from '@chakra-ui/react';

type Props = ChakraLoaderProps;
export type LoaderProps = Props;

export const Loader: React.FC<Props> = (props) => {
  return <ChakraLoader {...props} />;
};
