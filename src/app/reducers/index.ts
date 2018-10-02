import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAgency from './agency.reducer';
import * as fromMission from './mission.reducer';
import * as fromStatus from './status.reducer';
import * as fromLaunch from './launch.reducer';

export interface State {

  agency: fromAgency.AgencyState;
  mission: fromMission.MissionState;
  status: fromStatus.StatusState;
  launch: fromLaunch.LaunchState;
}

export const reducers: ActionReducerMap<State> = {

  agency: fromAgency.reducer,
  mission: fromMission.reducer,
  status: fromStatus.reducer,
  launch: fromLaunch.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
