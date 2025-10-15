import type { FlexProps } from '@components/ui/atoms/Flex';
import { Flex } from '@components/ui/atoms/Flex';
import React from 'react';

type Props = FlexProps;

export const Container: React.FCWithChildren<Props> = (props) => {
  return <Flex p="4" {...props} />;
};
