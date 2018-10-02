import { Action } from '@ngrx/store';
import { Status } from '../interfaces/status';

export enum StatusActionTypes {
  LoadStatuses = '[Status] Load ',
  StatusesLoaded = '[Status] Loaded',
  StatusesNotLoaded = '[Status] Not Loaded'
}

export class LoadStatuses implements Action {
  readonly type = StatusActionTypes.LoadStatuses;
}

export class StatusesLoaded implements Action {
  readonly type = StatusActionTypes.StatusesLoaded;
  constructor(public readonly payload: Status[]) {}
}

export class StatusesNotLoaded implements Action {
  readonly type = StatusActionTypes.StatusesNotLoaded;
  constructor(public readonly payload: string) {}
}

export type StatusActions = LoadStatuses | StatusesLoaded | StatusesNotLoaded;