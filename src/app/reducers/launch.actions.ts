import { Action } from '@ngrx/store';
import { Launch } from '../interfaces/launch';

export enum LaunchActionTypes {
  Search = '[Launch] Search',
  SearchCompleted = '[Launch] Search completed',
  SearchNotCompleted = '[Launch] Search not completed'
}

export class Search implements Action {
  readonly type = LaunchActionTypes.Search;
  constructor(public readonly payload: any) {}
}

export class SearchCompleted implements Action {
  readonly type = LaunchActionTypes.SearchCompleted;
  constructor(public readonly payload: Launch[]) {}
}

export class SearchNotCompleted implements Action {
  readonly type = LaunchActionTypes.SearchNotCompleted;
  constructor(public readonly payload: string) {}
}

export type LaunchActions = Search | SearchCompleted | SearchNotCompleted;
