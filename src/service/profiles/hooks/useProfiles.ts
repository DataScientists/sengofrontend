import { useProfilesLazyQuery } from '@graphql/hooks';
import { useCallback } from 'react';

import type { ProfilesResponse, SearchProfilesParams } from '../types';

type ProfilesReturn = {
  searchProfiles: (params: SearchProfilesParams) => Promise<ProfilesResponse>;
  loading: boolean;
  error: any;
  data: ProfilesResponse | null;
};

export const useProfiles = (): ProfilesReturn => {
  const [fetchProfiles, { data, loading, error }] = useProfilesLazyQuery();

  const searchProfiles = useCallback(
    async ({ searchTerm, ...paginationParams }: SearchProfilesParams): Promise<ProfilesResponse> => {
      try {
        // Make sure we have at least one pagination parameter
        const validPaginationParams = {
          ...paginationParams,
        };
        
        // If no pagination params are provided, default to first: 10
        if (!validPaginationParams.first && !validPaginationParams.last) {
          validPaginationParams.first = 10;
        }
        
        // Build the where clause based on search term
        const whereClause = searchTerm 
          ? {
            or:[
              { nameContainsFold: searchTerm },
              { titleContainsFold: searchTerm }
            ]
              
            } 
          : {};
        console.log(whereClause, "whereclause")

        // Only include the pagination parameters that are actually needed
        // This prevents the "Variable $last is never used" error
        const queryVariables: any = {
          where: whereClause
        };
        
        // Only add the pagination parameters that have values
        if (validPaginationParams.first) {
          queryVariables.first = validPaginationParams.first;
        }
        
        if (validPaginationParams.after) {
          queryVariables.after = validPaginationParams.after;
        }
        
        if (validPaginationParams.before) {
          queryVariables.before = validPaginationParams.before;
        }
        
        // Only add 'last' if we're actually using it for backward pagination
        if (validPaginationParams.last) {
          queryVariables.last = validPaginationParams.last;
        }
        
        const { data: response } = await fetchProfiles({
          variables: queryVariables
        });

        if (!response?.profiles) {
          return {
            edges: [],
            pageInfo: {
              hasNextPage: false,
              hasPreviousPage: false,
              startCursor: null,
              endCursor: null,
            },
            totalCount: 0,
          };
        }

        // Convert the response to match our ProfilesResponse type
        return {
          edges: response.profiles.edges,
          pageInfo: response.profiles.pageInfo,
          totalCount: response.profiles.totalCount
        };
      } catch (err) {
        console.error('Error searching profiles:', err);
        return {
          edges: [],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 0,
        };
      }
    },
    [fetchProfiles]
  );

  return {
    searchProfiles,
    loading,
    error,
    data: data?.profiles ? {
      edges: data.profiles.edges,
      pageInfo: data.profiles.pageInfo,
      totalCount: data.profiles.totalCount
    } : null,
  };
};