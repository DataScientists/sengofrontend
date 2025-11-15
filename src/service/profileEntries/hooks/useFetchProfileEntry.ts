import { useFetchProfileEntryMutation } from "@graphql/hooks";
import { useCallback } from "react";

type FetchProfileEntryParams = {
  id: string;
};

type FetchProfileEntryReturn = {
  fetchProfileEntry: (params: FetchProfileEntryParams) => Promise<any>;
  loading: boolean;
  error: any;
};

export const useFetchProfileEntry = (): FetchProfileEntryReturn => {
  const [fetchProfileEntryMutation, { loading, error }] =
    useFetchProfileEntryMutation();

  const fetchProfileEntry = useCallback(
    async ({ id }: FetchProfileEntryParams) => {
      try {
        const { data } = await fetchProfileEntryMutation({
          variables: {
            id,
          },
        });

        return data?.fetchProfileEntry;
      } catch (err) {
        console.error("Error creating profile entry:", err);
        throw err;
      }
    },
    [fetchProfileEntryMutation],
  );

  return {
    fetchProfileEntry,
    loading,
    error,
  };
};
