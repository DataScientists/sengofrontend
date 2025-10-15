import { useSetAtom } from 'jotai';
import { useCallback } from 'react';

import { meState } from '../atom';
import type { Me } from '../type';

/**
 * Returns an `upsert(input: Me)` function which merges
 * the new `Me` fields into the existing meState.
 */
export function useUpsert() {
  // Grab the setter for meState
  const setMe = useSetAtom(meState);

  // Create a stable upsert callback that always merges
  const upsert = useCallback(
    (input: Me) => {
      setMe((prev) => ({
        ...prev,
        ...input,
      }));
    },
    [setMe]
  );

  return { upsert };
}
