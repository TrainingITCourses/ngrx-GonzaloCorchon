import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MissionActionTypes, MissionsLoaded, MissionsNotLoaded, LoadMissions } from './mission.actions';
import { of } from 'rxjs';
import { MissionService } from '../services/mission.service';
import { map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class MissionEffects {

  
  @Effect()
  public load$ = this.actions$.ofType(MissionActionTypes.LoadMissions)
  .pipe(
    mergeMap((action: LoadMissions) => this.missionService.getMissions().pipe(
      map(missions => new MissionsLoaded(missions)),
      catchError( err => of(new MissionsNotLoaded("Mission Types could not be loaded")))
    ))
  );

  constructor(private actions$: Actions, private missionService:MissionService) {}
}
