import {
  useCreateProfileEntry,
  useFetchProfileEntry,
  useProfileEntries,
} from "./hooks";
import type {
  ProfileEntriesResponse,
  SearchProfileEntriesParams,
} from "./types";

type ProfileEntriesServiceReturn = {
  searchProfileEntries: (
    params: SearchProfileEntriesParams,
  ) => Promise<ProfileEntriesResponse>;
  createProfileEntry: (params: {
    linkedinUrn: string;
    gender: string;
  }) => Promise<any>;
  loading: boolean;
  createLoading: boolean;
  error: any;
  createError: any;
  data: ProfileEntriesResponse | null;

  fetchProfileEntry: (params: { id: string }) => Promise<any>;

  fetchLoading: boolean;
  fetchError: any;
};

export function useProfileEntriesService(): ProfileEntriesServiceReturn {
  const { searchProfileEntries, loading, error, data } = useProfileEntries();
  const {
    createProfileEntry,
    loading: createLoading,
    error: createError,
  } = useCreateProfileEntry();
  const {
    fetchProfileEntry,
    loading: fetchLoading,
    error: fetchError,
  } = useFetchProfileEntry();

  return {
    searchProfileEntries,
    createProfileEntry,
    loading,
    createLoading,
    error,
    createError,
    data,
    fetchProfileEntry,
    fetchError,
    fetchLoading,
  };
}
