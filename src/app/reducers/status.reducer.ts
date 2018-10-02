import { Action } from '@ngrx/store';
import { Status } from '../interfaces/status';
import { StatusActions, StatusActionTypes } from './status.actions';


export interface StatusState {
  statuses:Status[],
  message?:string,
  loading:boolean
}

export const initialState: StatusState = {
  statuses: [],
  loading: false
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
      state.loading = true;
      return {...state };
    case StatusActionTypes.StatusesLoaded:
      state.loading = false;
      state.statuses = action.payload;
      state.message = "";
      return {...state };
    case StatusActionTypes.StatusesNotLoaded:
      state.loading = false;
      state.statuses = [];
      state.message = action.payload;
      return { ...state };
    default:
      return state;
  }
}
