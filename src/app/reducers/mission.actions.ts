import { Action } from '@ngrx/store';
import { Mission } from '../interfaces/mission';

export enum MissionActionTypes {
  LoadMissions = '[Mission] Load ',
  MissionsLoaded = '[Mission] Loaded',
  MissionsNotLoaded = '[Mission] Not Loaded'
}

export class LoadMissions implements Action {
  readonly type = MissionActionTypes.LoadMissions;
}

export class MissionsLoaded implements Action {
  readonly type = MissionActionTypes.MissionsLoaded;
  constructor(public readonly payload: Mission[]) {}
}

export class MissionsNotLoaded implements Action {
  readonly type = MissionActionTypes.MissionsNotLoaded;
  constructor(public readonly payload: string) {}
}

export type MissionActions = LoadMissions | MissionsLoaded | MissionsNotLoaded;
