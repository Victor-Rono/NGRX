import { createAction, props } from '@ngrx/store';
import { VideoInterface } from 'src/app/features/admin/interfaces/video.interface';

export const setVideosAction = createAction(
  'set videos []',
  props<{videos: VideoInterface[]}>(),
);

export const addVideoAction = createAction(
  'add video []',
  props<{video: VideoInterface}>(),
);
