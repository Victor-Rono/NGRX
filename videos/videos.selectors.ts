import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoStateInterface } from './videos.state';

const getVideoState = createFeatureSelector<VideoStateInterface>('videos');

export const videosSelector = createSelector(getVideoState, (state) => state.videos);
