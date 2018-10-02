import { Action } from '@ngrx/store';
import { Mission } from '../interfaces/mission';
import { MissionActions, MissionActionTypes } from './mission.actions';


export interface MissionState {
  missions:Mission[],
  message?:string,
  loading:boolean
}

export const initialState: MissionState = {
  missions: [],
  loading: false
};

export function reducer(state = initialState, action: MissionActions): MissionState {
  switch (action.type) {
    case MissionActionTypes.LoadMissions:
      state.loading = true;
      return {...state };
    case MissionActionTypes.MissionsLoaded:
      state.missions = action.payload;
      state.loading = false;
      state.message = null;
      return {...state };
    case MissionActionTypes.MissionsNotLoaded:
      state.missions = [];
      state.loading = false;
      state.message = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}
