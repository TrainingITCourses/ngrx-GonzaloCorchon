import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchActionTypes, Search, SearchCompleted, SearchNotCompleted } from './launch.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LaunchService } from '../services/launch.service';
import { of } from 'rxjs';


@Injectable()
export class LaunchEffects {

  @Effect()
  public search$ = this.actions$.ofType(LaunchActionTypes.Search)
  .pipe(
    mergeMap((action: Search) => this.launchService.search(action.payload.searchMode, action.payload.id).pipe(
      map(launches => new SearchCompleted(launches)),
      catchError( err => of(new SearchNotCompleted("Search could not be completed")))
    ))
  );

  constructor(private actions$: Actions, private launchService: LaunchService) {}
}
