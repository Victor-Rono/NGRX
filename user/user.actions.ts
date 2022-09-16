import { createAction, props } from '@ngrx/store';
import { FirebaseUserInterface } from '../../interfaces/user';

export const setUserAction = createAction(
  'set user []',
  props<{user: FirebaseUserInterface | null}>(),
);

export const fetchUserAction = createAction(
  'fetch user [user.effects.ts]',
);
