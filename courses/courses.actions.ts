import { createAction, props } from '@ngrx/store';
import { CourseInterface } from 'src/app/features/course-designer/interfaces/course';

export const setCoursesAction = createAction(
  'set courses []',
  props<{courses: CourseInterface[]}>(),
);

export const fetchCoursesAction = createAction(
  'fetch courses [courses.effects.ts]',
);

// example of an action to delete a course
export const deleteCourseAction = createAction(
  'delete course []',
  props<{courseId: string}>(),
);
