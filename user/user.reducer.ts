import { createReducer, on } from '@ngrx/store';
import { fetchUserAction, setUserAction } from './user.actions';
import { initialUserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,

  on(setUserAction, (state, action) => ({

    ...state,
    currentUser: action.user,
  })),

  on(fetchUserAction, (state) => ({
    ...state,

  })),

);
