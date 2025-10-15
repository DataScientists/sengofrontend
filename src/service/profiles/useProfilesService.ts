import { useProfiles } from './hooks';
import type { ProfilesResponse, SearchProfilesParams } from './types';

type ProfilesServiceReturn = {
  searchProfiles: (params: SearchProfilesParams) => Promise<ProfilesResponse>;
  loading: boolean;
  error: any;
  data: ProfilesResponse | null;
};

export function useProfilesService(): ProfilesServiceReturn {
  const { searchProfiles, loading, error, data } = useProfiles();

  return { searchProfiles, loading, error, data };
}