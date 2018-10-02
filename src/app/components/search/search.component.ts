import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, OnChanges } from '@angular/core';
import { Agency } from '../../interfaces/agency';
import { Status } from '../../interfaces/status';
import { Mission } from '../../interfaces/mission';
import { SearchEventArgs } from '../../interfaces/search-event-args';
import { SearchMode } from '../../enums/search-mode.enum';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Input() agencies:Agency[];
  @Input() statuses:Status[];
  @Input() missions:Mission[];

  @Output() public search:EventEmitter<SearchEventArgs> = new EventEmitter<SearchEventArgs>();

  private mode:SearchMode = SearchMode.Agency;

  SearchMode = SearchMode; //Para poder acceder a la enumeración desde la template

  constructor() { }

  ngOnInit() {}

  filterChanged(value:number) : void {
    this.search.next({ searchMode: this.mode, id: value });
  }

  searchModeChanged(mode:SearchMode) : void {
    this.mode = mode;
    //Notificamos al contenedor que hemos cambiado el modo de búsqueda
    //Será el servicio de lanzamientos el que decida si devuelve todos los lanzamientos o ninguno cuando no hay filtro seleccionado.
    this.search.next({ searchMode: this.mode });
  }

  getDataSource(): { id:number, name:string }[] {
    
    switch(this.mode) {
      case SearchMode.Agency: return this.agencies;
      case SearchMode.Mission: return this.missions;
      case SearchMode.Status: return this.statuses;
    }
  }

}
