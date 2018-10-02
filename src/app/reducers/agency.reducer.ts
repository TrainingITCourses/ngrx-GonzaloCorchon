import { Action } from '@ngrx/store';
import { Agency } from '../interfaces/agency';
import { AgencyActions, AgencyActionTypes } from './agency.actions';


export interface AgencyState {
  agencies:Agency[],
  message?:string,
  loading:boolean
}

export const initialState: AgencyState = {
  agencies: [],
  loading: false
};

export function reducer(state = initialState, action: AgencyActions): AgencyState {
  switch (action.type) {
    case AgencyActionTypes.LoadAgencies:
      state.loading = true;
      return {...state};
    case AgencyActionTypes.AgenciesLoaded:
      state.agencies = action.payload;
      state.loading = false;
      state.message = null;
      return {...state };
    case AgencyActionTypes.AgenciesNotLoaded:
      state.agencies = [];
      state.loading = false;
      state.message = action.payload;
      return { ...state };
    default:
      return {...state };
  }
}
