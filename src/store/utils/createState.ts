import { atom } from 'jotai';
import { atomFamily, atomWithReset, RESET } from 'jotai/utils';

import { uniqBy } from '@/shared/utils';

type State = { id: string };

type Props<T extends State> = {
  initialState: () => T;
  set?: (params: { newVal: T }) => void;
};

export const createState = <T extends State>(props: Props<T>) => {
  // per‑ID storage
  const atomState = atomFamily((id: string) => atomWithReset<T>({ ...props.initialState(), id }));
  // the full list of items
  const listState = atom<T[]>([]);

  // list of IDs in insertion order
  const idsState = atom<string[]>([]);

  // read/write accessor per ID
  const state = atomFamily((id: string) =>
    atom(
      (get) => get(atomState(id)),
      (get, set, update: T | typeof RESET) => {
        // on reset, remove from all stores
        if (update === RESET) {
          set(atomState(id), RESET);
          set(listState, (prev) => prev.filter((p) => p.id !== id));
          set(idsState, (prev) => prev.filter((pid) => pid !== id));

          return;
        }

        // otherwise upsert into atomState
        set(atomState(id), update);
        // upsert into listState, merging on id
        set(listState, (prev) =>
          uniqBy([...prev, update], 'id').map((p) => (p.id === update.id ? { ...p, ...update } : p))
        );

        // append to idsState if new
        const ids = get(idsState);

        if (!ids.includes(update.id)) {
          set(idsState, [...ids, update.id]);
        }

        // optional side‑effect
        props.set?.({ newVal: update });
      }
    )
  );

  return { state, listState, idsState };
};
