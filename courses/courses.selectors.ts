import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseStateInterface } from './courses.state';

const getcourseState = createFeatureSelector<CourseStateInterface>('courses');

export const coursesSelector = createSelector(getcourseState, (state) => state.courses);
