import { type ListItemProps as ChakraListItemProps } from '@chakra-ui/react';
import { ListItem as ChakraListItem } from '@chakra-ui/react';

type Props = ChakraListItemProps;
export type ListItemProps = Props;

export const ListItem: React.FC<Props> = (props) => {
  return <ChakraListItem {...props} />;
};
