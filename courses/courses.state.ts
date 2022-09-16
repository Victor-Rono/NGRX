import { CourseInterface } from 'src/app/features/course-designer/interfaces/course';

export interface CourseStateInterface {
    courses: CourseInterface[];
}

// the initial state of the courses when the website loads
export const initialCourseState: CourseStateInterface = {
  courses: [],
};
