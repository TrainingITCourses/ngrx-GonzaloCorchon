import { Action } from '@ngrx/store';
import { Launch } from '../interfaces/launch';
import { LaunchActions, LaunchActionTypes } from './launch.actions';


export interface LaunchState {
  launches:Launch[];
  message?: string;
  loading: boolean
}

export const initialState: LaunchState = {
  launches: [],
  loading: false
};

export function reducer(state = initialState, action: LaunchActions): LaunchState {
  switch (action.type) {
    case LaunchActionTypes.Search:
      state.loading = true;
      return {...state };
    case LaunchActionTypes.SearchCompleted:
      state.launches = action.payload;
      state.loading = false;
      state.message = null;
      return { ...state };
    case LaunchActionTypes.SearchNotCompleted:
      state.launches = [];
      state.loading = false;
      state.message = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}
