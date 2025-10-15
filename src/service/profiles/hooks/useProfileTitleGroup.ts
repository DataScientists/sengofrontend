import { useGroupProfilesByTitleLazyQuery } from '@graphql/hooks';
import { useCallback } from 'react';

import type { ProfileTitleGroupResponse, GroupProfilesParams } from '../types';

type ProfileTitleGroupReturn = {
  fetchProfileTitleGroup: (params: GroupProfilesParams) => Promise<ProfileTitleGroupResponse>;
  loading: boolean;
  error: any;
  data: ProfileTitleGroupResponse | null;
};

export const useProfileTitleGroup = (): ProfileTitleGroupReturn => {
  const [fetchData, { data, loading, error }] = useGroupProfilesByTitleLazyQuery();

  const fetchProfileTitleGroup = useCallback(
    async ({ searchTerm, minCount }: GroupProfilesParams): Promise<ProfileTitleGroupResponse> => {
      try {
        const { data: response } = await fetchData({
          variables: {
            searchTerm: searchTerm?.trim() || null,
            minCount: minCount,
          },
        });

        if (!response?.profilesByTitle) {
          return [];
        }

        return response.profilesByTitle;
      } catch (err) {
        console.error('Error fetching profile title groups:', err);
        return [];
      }
    },
    [fetchData]
  );

  return {
    fetchProfileTitleGroup,
    loading,
    error,
    data: data?.profilesByTitle || null,
  };
};
