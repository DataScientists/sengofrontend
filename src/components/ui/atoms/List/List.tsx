import { List as ChakraList } from '@chakra-ui/react';

type Props = ChakraList.RootProps;
export type ListProps = Props;

export const List: React.FC<Props> = (props) => {
  return <ChakraList.Root {...props} />;
};
