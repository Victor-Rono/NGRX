import { createReducer, on } from '@ngrx/store';
import { addVideoAction, setVideosAction } from './videos.actions';
import { initialVideoState } from './videos.state';

export const videosReducer = createReducer(
  initialVideoState,

  on(setVideosAction, (state, action) => ({
    ...state,
    videos: action.videos,
  })),
  on(addVideoAction, (state, action) => ({
    ...state,
    videos: [action.video, ...state.videos],
  })),
);
