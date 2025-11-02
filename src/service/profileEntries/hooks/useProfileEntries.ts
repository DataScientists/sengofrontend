import { useProfileEntriesLazyQuery } from '@graphql/hooks';
import { useCallback } from 'react';

import type { ProfileEntriesResponse, SearchProfileEntriesParams } from '../types';

type ProfileEntriesReturn = {
  searchProfileEntries: (params: SearchProfileEntriesParams) => Promise<ProfileEntriesResponse>;
  loading: boolean;
  error: any;
  data: ProfileEntriesResponse | null;
};

export const useProfileEntries = (): ProfileEntriesReturn => {
  const [fetchProfileEntries, { data, loading, error }] = useProfileEntriesLazyQuery();

  const searchProfileEntries = useCallback(
    async ({ searchTerm, status, ...paginationParams }: SearchProfileEntriesParams): Promise<ProfileEntriesResponse> => {
      try {
        // Make sure we have at least one pagination parameter
        const validPaginationParams = {
          ...paginationParams,
        };
        
        // If no pagination params are provided, default to first: 10
        if (!validPaginationParams.first && !validPaginationParams.last) {
          validPaginationParams.first = 10;
        }
        
        // Build the where clause based on search term and status
        const whereClause: any = {};
        
        if (searchTerm) {
          whereClause.linkedinUrnContainsFold = searchTerm;
        }
        
        if (status) {
          whereClause.status = status;
        }

        // Only include the pagination parameters that are actually needed
        const queryVariables: any = {
          where: Object.keys(whereClause).length > 0 ? whereClause : undefined
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
        
        const { data: response } = await fetchProfileEntries({
          variables: queryVariables
        });

        if (!response?.profileEntries) {
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

        // Convert the response to match our ProfileEntriesResponse type
        return {
          edges: response.profileEntries.edges,
          pageInfo: response.profileEntries.pageInfo,
          totalCount: response.profileEntries.totalCount
        };
      } catch (err) {
        console.error('Error searching profile entries:', err);
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
    [fetchProfileEntries]
  );

  return {
    searchProfileEntries,
    loading,
    error,
    data: data?.profileEntries ? {
      edges: data.profileEntries.edges,
      pageInfo: data.profileEntries.pageInfo,
      totalCount: data.profileEntries.totalCount
    } : null,
  };
};