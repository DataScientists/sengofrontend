import { uniqBy } from '@shared/utils/uniqBy';

export const getNodesFromEdges = <
  Node extends { id: string },
  Data extends { edges?: ({ node?: Node | null } | null)[] | null } | null,
>(
  data?: Data | null
): Node[] => {
  return uniqBy(data?.edges?.map((e) => e?.node || []) as Node[], 'id') as Node[];
};
export const getNodesAndCursorsFromEdges = <
  Node extends { id: string },
  Data extends {
    edges?: ({ node?: Node | null; cursor?: string | null } | null)[] | null;
  } | null,
>(
  data?: Data | null
): { nodes: Node[]; cursors: string[] } => {
  const nodes: Node[] = uniqBy(data?.edges?.map((e) => e?.node || []) as Node[], 'id') as Node[];

  const cursors: string[] = (data?.edges || []).map((edge) => edge?.cursor || '');

  return { nodes, cursors };
};

export const initialPageInfo = (): {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  endCursor: string;
  startCursor: string;
} => ({
  hasPreviousPage: false,
  hasNextPage: false,
  endCursor: '',
  startCursor: '',
});
interface PageInfoType {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: any;
  endCursor: any;
}
export const getPageInfo = <
  Data extends {
    pageInfo?: PageInfoType | null;
  } | null,
>(
  res: Data | null
): PageInfoType => {
  return (res?.pageInfo || initialPageInfo()) as PageInfoType;
};

export const getTotalCount = <
  TotalCount,
  Data extends {
    totalCount?: TotalCount | null;
  } | null,
>(
  res: Data | null
): TotalCount => {
  return (res?.totalCount ?? 0) as TotalCount;
};

export const extractErrorMessage = (errorObj: any): string => {
  // Handle array of errors (take first error's message)
  if (Array.isArray(errorObj)) {
    return errorObj[0]?.message ?? 'Unknown error';
  }

  // Handle single error object
  if (errorObj?.message && typeof errorObj.message === 'string') {
    return errorObj.message;
  }

  // Handle GraphQL error structure
  if (errorObj?.errors?.length > 0) {
    return errorObj.errors[0]?.message ?? 'Unknown error';
  }

  // Fallback for unexpected formats
  return 'Unknown error occurred';
};
