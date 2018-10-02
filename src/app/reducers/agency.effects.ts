import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AgencyActionTypes, AgenciesLoaded, AgenciesNotLoaded, LoadAgencies } from './agency.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AgencyService } from '../services/agency.service';
import { of } from 'rxjs';


@Injectable()
export class AgencyEffects {

  @Effect()
  public load$ = this.actions$.ofType(AgencyActionTypes.LoadAgencies).pipe(
    mergeMap((action: LoadAgencies) => this.agencyService.getAgencies().pipe(
      map(agencies => new AgenciesLoaded(agencies)),
      catchError( err => of(new AgenciesNotLoaded("Agencies could not be loaded")))
    ))
  );

  constructor(private actions$: Actions, private agencyService: AgencyService) {}
}
