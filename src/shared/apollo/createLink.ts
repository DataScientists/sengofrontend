import { from } from '@apollo/client';

import { createErrorLink } from './createErrorLink';
import { createHttpLink, type CreateHttpProps } from './createHttpLink';
import { removeTypeName } from './removeTypename';

export type CreateLinkProps = CreateHttpProps;
export const createLink = (props: CreateLinkProps) => {
  return from([removeTypeName, createErrorLink(), createHttpLink(props)]);
};
