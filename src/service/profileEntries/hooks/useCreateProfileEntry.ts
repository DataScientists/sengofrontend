import { useCreateProfileEntryMutation } from '@graphql/hooks';
import { useCallback } from 'react';

type CreateProfileEntryParams = {
  linkedinUrn: string;
  gender: string;
};

type CreateProfileEntryReturn = {
  createProfileEntry: (params: CreateProfileEntryParams) => Promise<any>;
  loading: boolean;
  error: any;
};

export const useCreateProfileEntry = (): CreateProfileEntryReturn => {
  const [mutateCreateProfileEntry, { loading, error }] = useCreateProfileEntryMutation();

  const createProfileEntry = useCallback(
    async ({ linkedinUrn, gender }: CreateProfileEntryParams) => {
      try {
        const { data } = await mutateCreateProfileEntry({
          variables: {
            input: {
              linkedinUrn,
              gender,
            },
          },
        });

        return data?.createProfileEntry;
      } catch (err) {
        console.error('Error creating profile entry:', err);
        throw err;
      }
    },
    [mutateCreateProfileEntry]
  );

  return {
    createProfileEntry,
    loading,
    error,
  };
};