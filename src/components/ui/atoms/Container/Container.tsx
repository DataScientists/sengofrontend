import { type ContainerProps as ChakraContainerProps } from '@chakra-ui/react';
import { Container as ChakraContainer } from '@chakra-ui/react';

type Props = ChakraContainerProps;
export type ContainerProps = Props;

export const Container: React.FC<Props> = (props) => {
  return <ChakraContainer {...props} />;
};
