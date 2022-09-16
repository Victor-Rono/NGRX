import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { VideoInterface } from 'src/app/features/admin/interfaces/video.interface';
import { CourseInterface } from 'src/app/features/course-designer/interfaces/course';
import { CourseChaptersService } from 'src/app/features/course-designer/services/course-chapters/course-chapters.service';
import { VideoManagerService } from 'src/app/features/video-manager/services/video-manager.service';
import { fetchCoursesAction } from './courses/courses.actions';
import { CourseStateInterface } from './courses/courses.state';
import { fetchUserAction } from './user/user.actions';
import { UserStateInterface } from './user/user.state';
import { addVideoAction } from './videos/videos.actions';
import { videosSelector } from './videos/videos.selectors';
import { VideoStateInterface } from './videos/videos.state';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(
    private store: Store<{courses: CourseStateInterface, videos: VideoStateInterface, user: UserStateInterface}>,
    private videoService: VideoManagerService,
    private courseChapterService: CourseChaptersService,
  ) {

  }

  saveDataTostate() {
    // save user to state
    this.store.dispatch(fetchUserAction());
    // save courses to state
    this.store.dispatch(fetchCoursesAction());
  }

  getVideosFromCourses(courses: CourseInterface[]) {
    // get the videos currently in state
    let videosFromState: VideoInterface[] = [];
    let clonedVideo: VideoInterface | undefined;
    this.store.select(videosSelector).subscribe((videos) => {
      videosFromState = videos;
    });
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < courses.length; i++) {
      const courseToGet = courses[i];

      // eslint-disable-next-line no-loop-func
      this.courseChapterService.getAll$(courseToGet.uniqueCourseCode).subscribe((chapters) => {
        chapters.forEach((chapter) => {
          chapter.videos.forEach((video) => {
            this.videoService.getVideoByAssetId$(video.asset_id).subscribe((videoFromDb) => {
              clonedVideo = cloneDeep(videoFromDb);

              // add a video to state only if it does not already exist there
              if (clonedVideo && !videosFromState.filter((videoFromState) => videoFromState.asset_id === clonedVideo?.asset_id).length) {
                this.store.dispatch(addVideoAction({ video: clonedVideo }));
              }
            });
          });
        });
      });
    }
  }
}
