import type { ProfileFragment, ProfilesQueryVariables, ProfileTitleGroupFragment } from '@graphql/types';

export type ProfileResponse = ProfileFragment;
export type ProfilesResponse = {
  edges: Array<{ node: ProfileResponse | null } | null> | null;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
  totalCount: number;
};

export type SearchProfilesParams = Omit<ProfilesQueryVariables, 'where'> & {
  searchTerm?: string;
};

export type ProfileTitleGroupResponse = Array<ProfileTitleGroupFragment>;

export type GroupProfilesParams = {
  searchTerm?: string | null;
  minCount: number;
};