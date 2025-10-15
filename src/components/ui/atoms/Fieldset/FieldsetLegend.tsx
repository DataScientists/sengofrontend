import { type FieldsetLegendProps as ChakraFieldsetLegendProps } from '@chakra-ui/react';
import { FieldsetLegend as ChakraFieldsetLegend } from '@chakra-ui/react';

type Props = ChakraFieldsetLegendProps;
export type FieldsetLegendProps = Props;

export const FieldsetLegend: React.FC<Props> = (props) => {
  return <ChakraFieldsetLegend {...props} />;
};
