import { atomWithReset } from 'jotai/utils';

import { type Me } from './type';

export const initialState = (): Me => ({
  id: '',
  name: '',
  email: '',
});

export const meState = atomWithReset<Me>(initialState());
