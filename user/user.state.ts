import { FirebaseUserInterface } from '../../interfaces/user';

export interface UserStateInterface {
    currentUser: FirebaseUserInterface | null;
}

// the initial state of the courses when the website loads
export const initialUserState: UserStateInterface = {
  currentUser: null,
};
