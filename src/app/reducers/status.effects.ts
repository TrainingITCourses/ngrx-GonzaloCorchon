import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { StatusActionTypes, StatusesLoaded, StatusesNotLoaded, LoadStatuses } from './status.actions';
import { of } from 'rxjs';
import { StatusService } from '../services/status.service';
import { map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class StatusEffects {
  
  @Effect()
  public load$ = this.actions$.ofType(StatusActionTypes.LoadStatuses)
  .pipe(
    mergeMap((action: LoadStatuses) => this.statusService.getStatuses().pipe(
      map(statuses => new StatusesLoaded(statuses)),
      catchError( err => of(new StatusesNotLoaded( "Statuses could not be loaded ")))
    ))
  );

  constructor(private actions$: Actions, private statusService:StatusService) {}
}
