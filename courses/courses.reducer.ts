import { createReducer, on } from '@ngrx/store';
import { deleteCourseAction, setCoursesAction } from './courses.actions';
import { initialCourseState } from './courses.state';

export const coursesReducer = createReducer(
  initialCourseState,

  on(setCoursesAction, (state, action) => ({
    ...state,
    courses: action.courses,
  })),

  on(deleteCourseAction, (state, action) => ({
    ...state,
    courses: state.courses.filter((course) => course.uniqueCourseCode !== action.courseId),

  })),
);
