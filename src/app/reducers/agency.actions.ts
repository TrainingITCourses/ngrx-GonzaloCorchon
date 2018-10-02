import { Action } from '@ngrx/store';
import { Agency } from '../interfaces/agency';

export enum AgencyActionTypes {
  LoadAgencies = '[Agency] Load ',
  AgenciesLoaded = '[Agency] Loaded',
  AgenciesNotLoaded = '[Agency] Not Loaded'
}

export class LoadAgencies implements Action {
  readonly type = AgencyActionTypes.LoadAgencies;
}

export class AgenciesLoaded implements Action {
  readonly type = AgencyActionTypes.AgenciesLoaded;
  constructor(public readonly payload: Agency[]) {}
}

export class AgenciesNotLoaded implements Action {
  readonly type = AgencyActionTypes.AgenciesNotLoaded;
  constructor(public readonly payload: string) {}
}

export type AgencyActions = LoadAgencies | AgenciesLoaded | AgenciesNotLoaded;
