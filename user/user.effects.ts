import { Injectable } from '@angular/core';
import {
  catchError,
  map,
  mergeMap,
  Observable,
  switchMap,
} from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { fetchUserAction, setUserAction } from './user.actions';
import { UserService } from '../../services/user/user.service';
import { UserStateInterface } from './user.state';
import { FirebaseUserInterface } from '../../interfaces/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private angularFireAuth: AngularFireAuth,
    private store: Store<{user: UserStateInterface}>,
  ) {

  }

  // Save the current user to state
  fetchUserEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fetchUserAction),
    switchMap(async () => {
      this.userService.setCurrentUser();
    }),
    // catchError(async (error) => (console.log(error))),
  ), { dispatch: false });

  // exampleAction$ = createEffect(() => this.actions$.pipe(
  //   ofType(fetchCoursesAction),
  //   switchMap((action) => this.courseService.getActiveCourses$()),
  //   switchMap((courses: CourseInterface[]) => [
  //     setCoursesAction({ courses }),
  //     // ... more actions
  //   ]),
  // ));
}
