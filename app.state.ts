import { CourseEffects } from './courses/courses.effects';
import { coursesReducer } from './courses/courses.reducer';
import { CourseStateInterface } from './courses/courses.state';
import { UserEffects } from './user/user.effects';
import { userReducer } from './user/user.reducer';
import { UserStateInterface } from './user/user.state';
import { VideoEffects } from './videos/videos.effects';
import { videosReducer } from './videos/videos.reducer';
import { VideoStateInterface } from './videos/videos.state';

// state
export interface AppStateInterface {
    courses: CourseStateInterface,
    videos: VideoStateInterface,
    user: UserStateInterface,
}

// all reducers
export const appReducer = {
  courses: coursesReducer,
  videos: videosReducer,
  user: userReducer,
};

// effects
export const appEffects = [CourseEffects, VideoEffects, UserEffects];
