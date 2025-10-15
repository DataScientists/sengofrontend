import { type FieldRequiredIndicatorProps as ChakraFieldRequiredIndicatorProps } from '@chakra-ui/react';
import { FieldRequiredIndicator as ChakraFieldRequiredIndicator } from '@chakra-ui/react';

type Props = ChakraFieldRequiredIndicatorProps;
export type FieldRequiredIndicatorProps = Props;

export const FieldRequiredIndicator: React.FC<Props> = (props) => {
  return <ChakraFieldRequiredIndicator {...props} />;
};
