import { type HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';
import { Heading as ChakraHeading } from '@chakra-ui/react';

type Props = ChakraHeadingProps;
export type HeadingProps = Props;

export const Heading: React.FC<Props> = (props) => {
  return <ChakraHeading {...props} />;
};
