import { Injectable } from '@angular/core';
import {
  catchError,
  concatMap,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CourseService } from 'src/app/features/course-designer/services/course/course.service';
import { Store } from '@ngrx/store';
import { fetchCoursesAction, setCoursesAction } from './courses.actions';
import { UserStateInterface } from '../user/user.state';
import { userSelector } from '../user/user.selectors';
import { fetchUserAction } from '../user/user.actions';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
     private courseService: CourseService,
     private store: Store<{user: UserStateInterface}>,
  ) {

  }

  // fetch courses from firebase and save them to state
  fetchCoursesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fetchCoursesAction),
    switchMap(async () => {
      this.courseService.saveCoursesToState();
    }),
    // catchError(async (error) => (console.log(error))),
  ), { dispatch: false });
}
