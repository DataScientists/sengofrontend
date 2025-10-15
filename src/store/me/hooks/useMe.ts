import { useAtomValue } from 'jotai';

import { meState } from '../atom';

export const useMe = () => {
  const me = useAtomValue(meState);

  return { me };
};
