import { Component, OnInit } from '@angular/core';
import { SearchEventArgs } from './interfaces/search-event-args';

import { Launch } from './interfaces/launch';
import { SearchStatus } from './interfaces/search-status';

import { Store } from '@ngrx/store';
import { State } from './reducers';
import { LoadAgencies } from './reducers/agency.actions';
import { LoadMissions } from './reducers/mission.actions';
import { LoadStatuses } from './reducers/status.actions';
import { forkJoin } from 'rxjs';
import { Search } from './reducers/launch.actions';
import { Agency } from './interfaces/agency';
import { Mission } from './interfaces/mission';
import { Status } from './interfaces/status';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tarea 3';

  searchStatus:SearchStatus = { searching: false };
  
  //datos del buscador
  agencies:Agency[] = [];
  missions:Mission[] = [];
  statuses:Status[] = [];

  //resultados de búsqueda
  launches:Launch[] = [];

  constructor(private store: Store<State>) { }

  ngOnInit() {

    this.store.select('agency').subscribe( data => {
      this.agencies = data.agencies;
    });

    this.store.select('mission').subscribe( data => {
      this.missions = data.missions;
    });

    this.store.select('status').subscribe( data => {
      this.statuses = data.statuses;
    });

    this.store.select('launch').subscribe( data => {
        this.launches = data.launches;
        this.searchStatus.searching = data.loading;
    });

    this.store.dispatch(new LoadAgencies());
    this.store.dispatch(new LoadMissions());
    this.store.dispatch(new LoadStatuses());
  }

  onSearch(evt: SearchEventArgs){
    this.store.dispatch(new Search(evt));
  }
}
