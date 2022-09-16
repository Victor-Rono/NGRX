import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserStateInterface } from './user.state';

const getUserState = createFeatureSelector<UserStateInterface>('user');

export const userSelector = createSelector(getUserState, (state) => state.currentUser);
