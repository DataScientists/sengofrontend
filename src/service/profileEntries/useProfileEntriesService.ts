import { useProfileEntries, useCreateProfileEntry } from './hooks';
import type { ProfileEntriesResponse, SearchProfileEntriesParams } from './types';

type ProfileEntriesServiceReturn = {
  searchProfileEntries: (params: SearchProfileEntriesParams) => Promise<ProfileEntriesResponse>;
  createProfileEntry: (params: { linkedinUrn: string; gender: string }) => Promise<any>;
  loading: boolean;
  createLoading: boolean;
  error: any;
  createError: any;
  data: ProfileEntriesResponse | null;
};

export function useProfileEntriesService(): ProfileEntriesServiceReturn {
  const { searchProfileEntries, loading, error, data } = useProfileEntries();
  const { createProfileEntry, loading: createLoading, error: createError } = useCreateProfileEntry();

  return { 
    searchProfileEntries, 
    createProfileEntry,
    loading, 
    createLoading,
    error, 
    createError,
    data 
  };
}