import { useProfileTitleGroup } from './hooks';
import type { ProfileTitleGroupResponse, GroupProfilesParams } from './types';

type ProfileTitleGroupServiceReturn = {
  fetchProfileTitleGroup: (params: GroupProfilesParams) => Promise<ProfileTitleGroupResponse>;
  loading: boolean;
  error: any;
  data: ProfileTitleGroupResponse | null;
};

export function useProfileTitleGroupService(): ProfileTitleGroupServiceReturn {
  const { fetchProfileTitleGroup, loading, error, data } = useProfileTitleGroup();

  return { fetchProfileTitleGroup, loading, error, data };
}
