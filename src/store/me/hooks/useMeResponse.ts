import { useAtomCallback } from 'jotai/utils';

import type { Me } from '../type';
import { useUpsert } from './useUpsert';

export function useMeResponse() {
  const { upsert } = useUpsert();
  const setMeFromResponse = useAtomCallback<void, [Me]>((_, __, me) => {
    upsert(me);
  });

  return { setMeFromResponse };
}
