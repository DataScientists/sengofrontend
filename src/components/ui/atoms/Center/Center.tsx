import { type CenterProps as ChakraCenterProps } from '@chakra-ui/react';
import { Center as ChakraCenter } from '@chakra-ui/react';

type Props = ChakraCenterProps;
export type CenterProps = Props;

export const Center: React.FC<Props> = (props) => {
  return <ChakraCenter {...props} />;
};
