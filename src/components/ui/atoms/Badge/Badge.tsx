import { type BadgeProps as ChakraBadgeProps } from '@chakra-ui/react';
import { Badge as ChakraBadge } from '@chakra-ui/react';

type Props = ChakraBadgeProps;
export type BadgeProps = Props;

export const Badge: React.FC<Props> = (props) => {
  return <ChakraBadge {...props} />;
};
