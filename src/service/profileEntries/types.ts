import type { ProfileEntryFragment, ProfileEntriesQueryVariables } from '@graphql/types';

export type ProfileEntryResponse = ProfileEntryFragment;
export type ProfileEntriesResponse = {
  edges: Array<{ node: ProfileEntryResponse | null } | null> | null;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
  totalCount: number;
};

export type SearchProfileEntriesParams = Omit<ProfileEntriesQueryVariables, 'where'> & {
  searchTerm?: string;
  status?: string;
};