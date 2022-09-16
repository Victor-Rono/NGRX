import { VideoInterface } from 'src/app/features/admin/interfaces/video.interface';

export interface VideoStateInterface {
   videos: VideoInterface[];
}

// the initial state of the videos when the website loads
export const initialVideoState: VideoStateInterface = {
  videos: [],
};
